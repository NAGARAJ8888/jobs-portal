//app/api/job-post/route.js
import pool from "@/lib/db";

// POST (Insert a new job)
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      title,
      subtitle,
      jobtype,
      location,
      salaryRange,
      experienceLevel,
      industryType,
      jobDescription,
      keyResponsibilities,
      professionalSkills,
      tags,
      logo_url,
      recruiter_id,
    } = body;

    

    const result = await pool.query(
      `INSERT INTO job_post 
        ("title", "subtitle", "jobtype", "location", "salaryrange", "experiencelevel", "industrytype", "jobdescription", "keyresponsibilities", "professionalskills", "tags", "logo_url", "recruiter_id") 
       VALUES 
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) 
       RETURNING *`,
      [
        title,
        subtitle,
        jobtype,
        location,
        salaryRange,
        experienceLevel,
        industryType,
        jobDescription,
        keyResponsibilities,
        professionalSkills,
        tags,
        logo_url,
        recruiter_id,
      ]
    );

    return Response.json(
      { success: true, job: result.rows[0] },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}



export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title");

    const location = searchParams.get("location");

    const categories = searchParams.get("categories");

    const jobTypes = searchParams.get("jobtypes");

    const experience = searchParams.get("experience");

    const datePosted = searchParams.get("datePosted");

    const salaryMin = searchParams.get("salaryMin");

    const salaryMax = searchParams.get("salaryMax");

    const tags = searchParams.get("tags");

    const sort = searchParams.get("sort");


    let query = `SELECT * FROM job_post WHERE 1=1`;
    const values = [];
    let count = 1;

    // Title filter
    if (title) {
      query += ` AND LOWER(title) LIKE $${count}`;
      values.push(`%${title.toLowerCase()}%`);
      count++;
    }

    // Location filter
    if (location) {
      query += ` AND LOWER(location) LIKE $${count}`;
      values.push(`%${location.toLowerCase()}%`);
      count++;
    }

    // Categories filter
    if (categories) {
      const cats = categories.split(",");
      query += ` AND "industrytype" = ANY($${count}::text[])`;
      values.push(cats);
      count++;
    }

    // Job types filter
    if (jobTypes) {
      const types = jobTypes.split(",");
      query += ` AND jobtype = ANY($${count}::text[])`;
      values.push(types);
      count++;
    }

    // Experience filter
    if (experience) {
      const exps = experience.split(",");
      query += ` AND "experiencelevel" = ANY($${count}::text[])`;
      values.push(exps);
      count++;
    }

    // Salary filter (use count instead of hardcoding $1/$2)
if (salaryMin && salaryMax && !(salaryMin == 0 && salaryMax == 9999)) {
  query += ` AND split_part("salaryrange", '-', 1)::int >= $${count}`;
  values.push(Number(salaryMin));
  count++;

  query += ` AND split_part("salaryrange", '-', 2)::int <= $${count}`;
  values.push(Number(salaryMax));
  count++;
}


    // Date posted filter (no $param inside INTERVAL)
if (datePosted && datePosted !== "all") {
  if (datePosted.endsWith("h")) {
    const hours = parseInt(datePosted);
    query += ` AND created_at >= NOW() - INTERVAL '${hours} hours'`;
  } else if (datePosted.endsWith("d")) {
    const days = parseInt(datePosted);
    query += ` AND created_at >= NOW() - INTERVAL '${days} days'`;
  }
}


    // Tags filter
    if (tags) {
      const tagArray = tags.split(",");
      const tagConditions = tagArray.map((_, idx) => `tags ILIKE $${count + idx}`);
      query += ` AND (${tagConditions.join(" OR ")})`;
      tagArray.forEach(tag => values.push(`%${tag}%`));
      count += tagArray.length;
    }

    // Sorting
if (sort) {
  if (sort === "latest") {
    query += ` ORDER BY created_at DESC`;
  } else if (sort === "salary_high") {
    query += ` ORDER BY split_part("salaryrange", '-', 2)::int DESC`; // high salary
  } else if (sort === "salary_low") {
    query += ` ORDER BY split_part("salaryrange", '-', 1)::int ASC`;  // low salary
  }
}

    const result = await pool.query(query, values);

    return Response.json(result.rows);
  } catch (err) {
    console.error("Server error in GET /api/job-post:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}


