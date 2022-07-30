-- 如果不存在则创建数据库
create database if not exists recruitsystem;

-- 使用数据库
use recruitsystem;

-- 如果存在则删表
drop table if exists `user`;

-- 创建用户表
create table `user` (
  `userid` varchar(40) not null,
  -- 用户id-学号
  `password` varchar(40),
  -- 密码
  `name` varchar(40) default null,
  `gender` tinyin default null,
  `major` varchar(30) default null,
  `email` varchar(40) default null,
  `phone` varchar(40) default null,
  `auth` tinyint not null default 1,
  `wish` tinyint default null,
  `is_sign` tinyint default 0,
  `wechat_id` varchar(80) default null,
  `create_time` DATETIME not null default now(),
  `update_time` DATETIME not null default now(),
  primary key (`userid`)
) ENGINE = InnoDB default CHARSET = utf8mb4;

-- 增加默认管理用户
delete from `user` where userid = "root";
insert into `user` (userid, name, password, auth) values ("root", "root", "rsadmin", 100);

-- 如果存在则删表
drop table if exists `interview`;

-- 创建面试表
create table `interview` (
  `userid` varchar(40) not null,
  `first_interview` varchar(200) default null,
  `first_attitude` int default null,
  `first_ability` int default null,
  `first_remarks` varchar(200) default null,
  `first_ispass` tinyint default null,
  `first_interviewer` varchar(40),
  `first_interview_time` DATETIME default null,
  `second_interview` varchar(200),
  `second_attitude` int default null,
  `second_ability` int default null,
  `second_remarks` varchar(200) default null,
  `second_ispass` tinyint default null,
  `second_interviewer` varchar(40),
  `second_interview_time` DATETIME default null,
  `third_interview` varchar(200),
  `third_attitude` int default null,
  `third_ability` int default null,
  `third_remarks` varchar(200) default null,
  `third_ispass` tinyint default null,
  `third_interviewer` varchar(40),
  `third_interview_time` DATETIME default null,
  `final_ispass` tinyint default null,
  `is_send` tinyint default null,
  `create_time` DATETIME not null default now(),
  `update_time` DATETIME not null default now(),
  primary key (`userid`)
) ENGINE = InnoDB default CHARSET = utf8mb4;
