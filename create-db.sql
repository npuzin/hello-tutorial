CREATE TABLE person (
  id int(11) NOT NULL,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  sent timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)