--创建数据库yc
create database yc character set utf8;

--切换到yc库
use yc;

--创建管理员信息表
drop table if exists 'adminInfo';
create table adminInfo(
    aid int primary key auto_increment,
    aname varchar(100) not null,
    pwd varchar(20) not null,
    age int,
    addr varchar(100),
    photo varchar(200)
);

alter table adminInfo auto_increment=1001;