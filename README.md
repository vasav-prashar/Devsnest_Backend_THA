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

#Day 3(publish and subscribe)
## basic

```
SUBCRIBE channelName                  // for creating channel
PUBLISH channelName "message"        // to send message to SUBCRIBE channel
```

Syntax: XADD streamName id key value example:

```
1. XADD mystream 1000 name Anna

2. XADD mystream * name Bert
// * give random id as timestamp

3. XADD mystream MAXLEN 10000 * name Cathy
// if len is greater than maxelen as a stack top data deleted and new data add in top

```

## To list all stream

```
SCAN 0 TYPE stream
```

## List all stream data

```
XREAD COUNT dataCount STREAMS streamName startingIndex/startingID
```

example: XREAD COUNT 200 STREAMS mystream 0

## Control stream closeing time

```
XREAD BLOCK timeInMS STREAMS streamName 0
```

example: XREAD BLOCK 100000 STREAMS mystream 0 // here if no data is sent 10s the stream is closed

```
XREAD BLOCK 0 STREAMS mystream 0
// here the stream never end

XREAD BLOCK 100000 STREAMS mystream $
// here it wait for 100000 consantly, if no data sent
the strem closed automatically
```

## Loop

```
# forward
XRANGE streamName startingID endID
```

example: XRANGE mystream 1000-0 1000-10 // list all data in the range

```
XRANGE mystream 1000-0 1000-10 COUNT 5
// list 5 data in the range

XRANGE mystream + -
// if don't know the id, we can use this it's give all data

XRANGE mystream + - COUNT 5
// give first 5 data

## reverse
XREVRANGE streamName + -
```