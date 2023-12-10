CREATE TABLE "movie"(
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "movie" ADD PRIMARY KEY("id");
CREATE TABLE "user"(
    "id" SERIAL NOT NULL,
    "fistName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "user" ADD PRIMARY KEY("id");
CREATE TABLE "user_has_movie"(
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL
);
ALTER TABLE
    "user_has_movie" ADD PRIMARY KEY("id");
ALTER TABLE
    "user_has_movie" ADD CONSTRAINT "user_has_movie_user_id_unique" UNIQUE("user_id");
ALTER TABLE
    "user_has_movie" ADD CONSTRAINT "user_has_movie_movie_id_unique" UNIQUE("movie_id");

/* ALTER TABLE
    "user_has_movie" ADD CONSTRAINT "user_has_movie_id_foreign" FOREIGN KEY("id") REFERENCES "movie"("id");
ALTER TABLE
    "user_has_movie" ADD CONSTRAINT "user_has_movie_id_foreign" FOREIGN KEY("id") REFERENCES "user"("id"); */