--创建博客数据库
create database blog character set utf8;

--切换到博客数据库
use blog;

--创建用户信息表
create table userInfo(
    usid int primary key auto_increment, --用户编号
    uname varchar(100) not null unique, --昵称
    pwd varchar(20) not null, --密码
    email varchar(50) not null unique, --邮箱
    photo varchar(100), --用户图像
    status int --账号状态  1.可以  0.不可用
);
--修改自增列的起始值
alter table userInfo auto_increment=1001;

--创建文章类型表
create table typeInfo(
    tid int primary key auto_increment, --文章类型编号
    tname varchar(100) not null unique, --文章类型名称
    status int --文章类型状态
);
alter table typeInfo auto_increment=1001;

--创建文章信息表
create table article(
    aid int primary key auto_increment, --文章编号
    tid int, --文章类型编号
    usid int, --用户编号
    title varchar(100) not null, --文章标题
    content text, --文章内容
    adate datetime, --文章发表的时间
    pic varchar(1000), --图片
    views int, --文章点击次数
    constraint FK_article_tid foreign key(tid) references typeInfo(tid),
    constraint FK_article_usid foreign key(usid) references userInfo(usid)
);

--点赞信息表
create table zan(
    zid int primary key auto_increment, --点赞编号
    usid int, --用户编号
    aid int, --文章编号
    constraint FK_zan_usid foreign key(usid) references userInfo(usid),
    constraint FK_zan_aid foreign key(aid) references article(aid)
);

--评论信息表
create table comment(
    cid int primary key auto_increment, --评论编号
    usid int, --用户编号
    content varchar(1000), --评论的内容
    cdate datetime, --评论时间
    aid int, --评论的文章编号
    constraint FK_comment_aid foreign key(aid) references article(aid),
    constraint FK_comment_usid foreign key(usid) references userInfo(usid)
);