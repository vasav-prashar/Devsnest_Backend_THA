# REDIS
## Redis Installation

1. For Windows
	- Enable WSL from "Turn Windows features on or off settings"
	- Restart the machine
	- Install Ubuntu20.04 from Windows Store
	- Open Ubuntu and setup name and password
	- Run the following commands:
    ``` sudo apt-get update
        sudo apt-get upgrade
        sudo apt-get install redis-server
        sudo service redis-server restart
        redis-cli
    ```
2. For Linux
	- Run the commands:
    ``` sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli
    ```    
--- 
## Usage

For `Strings`

- SET key value
- GET key
- ttl key (time to live)
- KEYS \*
- DEL key
- FLUSHALL  (delete all keys)
- EXISTS key    (check if key exists)
- expire key time   (set time to live)
- setex key time value  (set time to live and value)

For `Arrays`

- LPUSH array value
- RPUSH array value
- LRANGE array start stop
- LPOP array
- RPOP array

For `Sets`

- SADD myset value
- SMEMBERS myset
- SREM myset value

For `Object/Hash`

- HSET key field value
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field

---

## POSTGRES INSTALLATION
1. For Windows
    - Run the commands:
    ```
        sudo apt update
        sudo apt install postgresql postgresql-contrib
        sudo -i -u postgres
        psql
    ```
2. For linux
    - Run the commands:
    ```
        sudo -u postgres psql
    ```
## SQL BASICS 

Collection of Tables is Database.<br>
POSTGRESQL is a Database.

```# CREATE DATABASE databaseName;
# GRANT ALL PRIVILEGES ON databaseName TO userName;   (~SELECT, INSERT, UPDATE, DELETE)
# \l     (list all databases)
# \d     (list all tables)
# \c     (connect to database)
# \q     (quit)
```
### Commands and their uses:
```postgres=# CREATE USER username WITH PASSWORD 'password';
postgres=# CREATE DATABASE databasename;
postgres=# GRANT ALL PRIVILEGES ON DATABASE databasename TO username;
postgres=# GRANT SELECT PRIVILEGES ON DATABASE databasename TO username;
postgres=# GRANT INSERT PRIVILEGES ON DATABASE databasename TO username;
postgres=# GRANT DELETE PRIVILEGES ON DATABASE databasename TO username;
postgres=# GRANT UPDATE PRIVILEGES ON DATABASE databasename TO username;
postgres=# \c databasename [connect to database]

[AFTER CONNECTING TO DATABASE]

databasename=# CREATE TABLE tablename(
databasename(# ColumnName  DATATYPE NOT NULL,
databasename(# ColumnName  DATATYPE ,
databasename(# );
databasename=# \d [to display list of tables ]
databasename=# \d tablename [to display table properties]
databasename-# DROP TABLE tablename; [delete table]

postgres-# \l [all existing database can be seen]
postgres-# DROP DATABASE databasename; [delete database]
[first connect to different database then drop required database]
\q [to exit postgres]
```