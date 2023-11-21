create TABLE "user"(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	surname VARCHAR(255)
);

create TABLE post(
	id SERIAL PRIMARY KEY,
	content VARCHAR(255),
	description VARCHAR(255),
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES "user" (id)
);	