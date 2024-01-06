CREATE TABLE sailors (
  sid integer not null AUTO_INCREMENT,
  sname varchar(32),
  rating integer,
  age real,
  CONSTRAINT PK_sailors PRIMARY KEY (sid)
);

CREATE TABLE boats (
  bid integer not null AUTO_INCREMENT,
  bname varchar(32),
  color varchar(32),
  CONSTRAINT PK_boats PRIMARY KEY (bid)
);

CREATE TABLE reserves (
  sid integer not null,
  bid integer not null,
  days varchar(32),
  CONSTRAINT PK_reserves PRIMARY KEY (sid, bid, days),
  CONSTRAINT FK_reserves FOREIGN KEY (sid) REFERENCES sailors(sid),
  CONSTRAINT FK_reserves1 FOREIGN KEY (bid) REFERENCES boats(bid)
);


insert into sailors values('22','Dustin','7','45.0');
insert into sailors values('29','Brutus','1','33.0');
insert into sailors values('31','Lubber','8','55.0');
insert into sailors values('32','Andy','8','25.0');
insert into sailors values('58','Rusty','10','55.0');
insert into sailors values('64','Horatio','7','35.0');
insert into sailors values('71','Zorba','10','16.0');
insert into sailors values('74','Horatio','9','35.0');
insert into sailors values('85','Art','3','25.5');
insert into sailors values('95','Bob','3','63.5');

insert into boats values('101','Interlake','Blue');
insert into boats values('102','Interlake','red');
insert into boats values('103','Clipper','Green');
insert into boats values('104','Marine','red');

insert into reserves values('22','101','10/10/98');
insert into reserves values('22','102','11/10/98');
insert into reserves values('22','103','12/10/98');
insert into reserves values('22','104','13/10/98');
insert into reserves values('31','102','14/10/98');
insert into reserves values('31','103','15/10/98');
insert into reserves values('31','104','14/10/98');
insert into reserves values('64','101','15/10/98');
insert into reserves values('64','102','16/10/98');
insert into reserves values('74','103','17/10/98');
