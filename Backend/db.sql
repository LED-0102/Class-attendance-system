CREATE table users (
    name VARCHAR,
    password VARCHAR,
    PRIMARY KEY (name)
);
CREATE table students (
    id VARCHAR,
    name VARCHAR,
    photo VARCHAR,
    PRIMARY KEY (id)
);
CREATE table class (
    username VARCHAR,
    classname VARCHAR,
    student VARCHAR,
    PRIMARY KEY (username, classname),
    FOREIGN KEY (student) REFERENCES students(id),
    FOREIGN KEY (username) references users(name)
);
CREATE INDEX cls ON class(classname);
CREATE INDEX student_to_class ON class(student);


CREATE table photo (
    username VARCHAR,
    classname VARCHAR,
    photo VARCHAR,
    date DATE,
    PRIMARY KEY (username, classname, date)
)