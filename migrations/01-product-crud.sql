CREATE DATABASE  IF NOT EXISTS `product_crud`;
USE `product_crud`;

CREATE TABLE IF NOT EXISTS `products` (
  `id` varchar(36) NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `product_description` text,
  `photo` varchar(45) DEFAULT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
);

