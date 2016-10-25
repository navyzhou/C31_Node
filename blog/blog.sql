create database blog character set utf8;

use blog;

create table userInfo(
    usid int primary key auto_increment,
    uname varchar(100) not null unique,
    pwd varchar(20) not null,
    email varchar(50) not null unique,
    photo varchar(100),
    status int
);
alter table userInfo auto_increment=1001;

create table typeInfo(
    tid int primary key auto_increment,
    tname varchar(100) not null unique,
    status int
);
alter table typeInfo auto_increment=1001;

create table article(
    aid int primary key auto_increment,
    tid int,
    usid int,
    title varchar(100) not null,
    content text,
    adate datetime,
    pic varchar(1000),
    views int,
    constraint FK_article_tid foreign key(tid) references typeInfo(tid),
    constraint FK_article_usid foreign key(usid) references userInfo(usid)
);

create table zan(
    zid int primary key auto_increment,
    usid int,
    aid int,
    constraint FK_zan_usid foreign key(usid) references userInfo(usid),
    constraint FK_zan_aid foreign key(aid) references article(aid)
);

create table comment(
    cid int primary key auto_increment,
    usid int,
    content varchar(1000),
    cdate datetime,
    aid int,
    constraint FK_comment_aid foreign key(aid) references article(aid),
    constraint FK_comment_usid foreign key(usid) references userInfo(usid)
);