
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('recruiter','jobseeker')),
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE IF NOT EXISTS jobseeker_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    phone VARCHAR(20),
    location VARCHAR(100),
    experience_level VARCHAR(50),
    skills TEXT,
    resume_url TEXT,
    bio TEXT,
    updated_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE IF NOT EXISTS recruiter_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    location TEXT,
    website TEXT,
    industry TEXT,
    bio TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    logo_url TEXT
);


CREATE TABLE IF NOT EXISTS job_post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    subtitle VARCHAR(500),
    jobtype VARCHAR(50) NOT NULL,
    location VARCHAR(120) NOT NULL,
    salaryRange VARCHAR(100),
    experienceLevel VARCHAR(50) NOT NULL,
    industryType VARCHAR(100),
    jobDescription TEXT NOT NULL,
    keyResponsibilities TEXT,
    professionalSkills TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    tags VARCHAR,
    logo_url TEXT,
    recruiter_id INTEGER REFERENCES recruiter_profiles(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    job_id INTEGER NOT NULL REFERENCES job_post(id) ON DELETE CASCADE,
    recruiter_id INTEGER NOT NULL REFERENCES recruiter_profiles(id) ON DELETE CASCADE,
    jobseeker_id INTEGER NOT NULL REFERENCES jobseeker_profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT now(),
    CONSTRAINT unique_application UNIQUE(job_id, jobseeker_id)
);
