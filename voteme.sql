-- Database: Voteme

-- DROP DATABASE IF EXISTS "Voteme";


	
CREATE TYPE accType AS ENUM ('school', 'public', 'organization');


CREATE TABLE Accounts (
	accountId INT,
	accountType accType,
	accountEmail text NOT NULL UNIQUE,
	PRIMARY KEY (accountId)
);

create unique index users_unique_lower_email_idx on Accounts(lower(accountEmail));


































