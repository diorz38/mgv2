-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.18 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table mgeologi.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8 NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_slug_unique` (`slug`),
  KEY `categories_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.categories: ~2 rows (approximately)
DELETE FROM `categories`;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `parent_id`, `order`, `name`, `slug`, `created_at`, `updated_at`) VALUES
	(1, NULL, 1, 'Berita', 'berita', '2018-07-02 04:19:12', '2018-07-04 08:25:15'),
	(2, NULL, 2, 'Kegiatan', 'kegiatan', '2018-07-02 04:19:12', '2018-07-04 12:09:07');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping structure for table mgeologi.contents
CREATE TABLE IF NOT EXISTS `contents` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(10) unsigned DEFAULT NULL,
  `category_id` int(10) unsigned DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `featured` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.contents: ~12 rows (approximately)
DELETE FROM `contents`;
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` (`id`, `author_id`, `category_id`, `title`, `excerpt`, `body`, `image`, `slug`, `status`, `featured`, `created_at`, `updated_at`) VALUES
	(2, 1, 1, 'Indonesia Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt ', '<h2>BUSANA TAHUN 2016</h2>\n<hr />\n<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n<h3>Header Level 3</h3>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt</p>\n<ul>\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n<li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>', 'contents\\July2018\\0grNNf0sjK2xR5nIxppR.jpg', 'test1', 'DRAFT', 1, '2018-07-04 14:11:00', '2018-07-04 14:32:15'),
	(3, 1, 1, 'Indonesia Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt ', '<h2>BUSANA TAHUN 2016</h2>\n<hr />\n<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n<h3>Header Level 3</h3>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt</p>\n<ul>\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n<li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>', 'posts\\post2-cropped.jpg', 'test', 'DRAFT', 0, '2018-07-03 14:12:00', '2018-07-04 14:17:18'),
	(4, 1, 2, 'Perburuan harta karun untuk keluarga', 'Suscipit nihil soluta est facilis et beatae animi. Consequatur dolore eum suscipit sed id. Numquam qui pariatur perferendis.', '<p>Qui quia impedit velit et dicta nemo ut. Placeat sunt sunt porro debitis eaque. Est iusto reiciendis doloribus doloremque ut.</p>', 'contents\\July2018\\2.jpg', 're-contextualized-local-circuit', 'DRAFT', 0, '2018-04-02 14:44:41', '2018-07-05 14:44:41'),
	(5, 2, 1, 'Polarised stable info-mediaries', 'Ea facilis sapiente consequuntur atque sit placeat perspiciatis. Nostrum dolores a doloremque beatae dolores expedita. Quas ullam qui est deserunt non quis.', 'Dolore mollitia illo eveniet architecto eos. Nemo sit consequatur illum rerum ut molestias possimus.', 'posts\\post3-cropped.jpg', 'polarised-stable-info-mediaries', 'DRAFT', 0, '1978-11-24 20:00:40', '1997-03-12 23:03:24'),
	(6, 2, 1, 'Innovative mission-critical parallelism', 'Libero minima quam eveniet quae exercitationem repellendus. Itaque ex autem voluptas sunt quisquam in et. Doloremque eum ut perferendis dolore in voluptas.', 'Aut ut neque et quos voluptas libero et ipsam. Perferendis iste doloribus nam omnis. Ad nihil aliquam alias aut facilis.', 'contents\\July2018\\5NRM8eGNIsqM2YuGXDkZ.jpg', 'innovative-mission-critical-parallelism', 'DRAFT', 0, '1988-12-16 11:26:40', '1970-04-22 20:51:37'),
	(7, 1, 2, 'Robust 24/7 product', 'Quos numquam error veritatis ipsam commodi quo. Qui nostrum sit sunt. Facere quibusdam dignissimos officiis pariatur voluptas nihil amet.', '<p>Corporis consequuntur aut sunt quam repellendus. Est minus nobis saepe quibusdam distinctio beatae vel. Eligendi id nulla ad optio.</p>', 'posts\\post4-cropped.jpg', 'robust-247-product', 'DRAFT', 0, '1980-07-27 12:17:00', '2018-07-05 14:38:12'),
	(8, 2, 1, 'Right-sized 5thgeneration matrices', 'Libero ad molestiae et qui. Vero sed amet veniam hic dolores omnis. Exercitationem impedit veritatis commodi quia repudiandae. Quas commodi dolor harum exercitationem accusantium necessitatibus.', '<p>Laborum occaecati recusandae earum. Aliquam et accusantium vero aut.</p>', 'posts\\post3-cropped.jpg', 'right-sized-5thgeneration-matrices', 'DRAFT', 0, '2011-07-23 09:30:00', '2018-07-05 14:39:33'),
	(9, 2, 1, 'Reactive attitude-oriented structure', 'Laborum corporis perferendis aut aut aperiam autem dolores cupiditate. Modi hic minima harum modi. Et mollitia maiores dolorum. Quia vitae omnis fugiat autem id debitis dolores.', 'Dolorem fugit dolor tempore molestias nesciunt. Et vel sunt sint. Sit qui dolorem accusamus et quae tenetur vero.', 'contents\\July2018\\0grNNf0sjK2xR5nIxppR.jpg', 'reactive-attitude-oriented-structure', 'DRAFT', 0, '1988-11-03 02:45:00', '2012-05-05 00:03:38'),
	(10, 2, 1, 'Assimilated global knowledgebase', 'Accusamus esse nihil neque. Sunt sit quis velit unde. Iste occaecati esse reprehenderit soluta. Sunt sint ex laboriosam nostrum quam iure est blanditiis.', 'Necessitatibus nihil ratione velit et aut doloremque iste. Est repudiandae ab expedita. Natus eius adipisci vel necessitatibus ut. Eos qui illo ullam quia sed molestiae sint.', 'posts\\post2-cropped.jpg', 'assimilated-global-knowledgebase', 'DRAFT', 0, '1978-02-18 21:43:01', '2010-04-07 04:43:32'),
	(11, 2, 2, 'Cloned full-range workforce', 'Aut assumenda itaque expedita quos et. Est soluta sunt porro sit. Sequi doloribus sunt qui. Quam laudantium omnis tenetur quis impedit.', 'In adipisci perferendis aut iste adipisci quibusdam in. Et nisi natus quia accusantium atque. Vel culpa dolorem quis facere impedit accusamus earum. Et aut maxime maxime velit.', 'contents\\July2018\\5NRM8eGNIsqM2YuGXDkZ.jpg', 'cloned-full-range-workforce', 'DRAFT', 0, '2012-06-03 06:13:56', '1983-02-21 22:28:03'),
	(13, 2, 2, 'Perayaan Hari Musium ke-25th', 'Eius provident neque et illum voluptatem aut hic temporibus. Voluptatem ut voluptatibus est atque dolorem placeat aut. Voluptas aperiam earum voluptatem animi et consequatur.', '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt\r\n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\r\n    Aliquam tincidunt mauris eu risus.\r\nPellentesque habitant morbi tristiue senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus\r\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus </p>', 'contents\\July2018\\1.jpg', 'user-centric-needs-based-implementation', 'DRAFT', 0, '2018-07-05 14:54:33', '2018-07-05 14:54:33');
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;

-- Dumping structure for table mgeologi.data_rows
CREATE TABLE IF NOT EXISTS `data_rows` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data_type_id` int(10) unsigned NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `browse` tinyint(1) NOT NULL DEFAULT '1',
  `read` tinyint(1) NOT NULL DEFAULT '1',
  `edit` tinyint(1) NOT NULL DEFAULT '1',
  `add` tinyint(1) NOT NULL DEFAULT '1',
  `delete` tinyint(1) NOT NULL DEFAULT '1',
  `details` text COLLATE utf8mb4_unicode_ci,
  `order` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `data_rows_data_type_id_foreign` (`data_type_id`),
  CONSTRAINT `data_rows_data_type_id_foreign` FOREIGN KEY (`data_type_id`) REFERENCES `data_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.data_rows: ~72 rows (approximately)
DELETE FROM `data_rows`;
/*!40000 ALTER TABLE `data_rows` DISABLE KEYS */;
INSERT INTO `data_rows` (`id`, `data_type_id`, `field`, `type`, `display_name`, `required`, `browse`, `read`, `edit`, `add`, `delete`, `details`, `order`) VALUES
	(1, 1, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, '', 1),
	(2, 1, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, '', 2),
	(3, 1, 'email', 'text', 'Email', 1, 1, 1, 1, 1, 1, '', 3),
	(4, 1, 'password', 'password', 'Password', 1, 0, 0, 1, 1, 0, '', 4),
	(5, 1, 'remember_token', 'text', 'Remember Token', 0, 0, 0, 0, 0, 0, '', 5),
	(6, 1, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 0, '', 6),
	(7, 1, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '', 7),
	(8, 1, 'avatar', 'image', 'Avatar', 0, 1, 1, 1, 1, 1, '', 8),
	(9, 1, 'user_belongsto_role_relationship', 'relationship', 'Role', 0, 1, 1, 1, 1, 0, '{"model":"TCG\\\\Voyager\\\\Models\\\\Role","table":"roles","type":"belongsTo","column":"role_id","key":"id","label":"display_name","pivot_table":"roles","pivot":"0"}', 10),
	(10, 1, 'user_belongstomany_role_relationship', 'relationship', 'Roles', 0, 1, 1, 1, 1, 0, '{"model":"TCG\\\\Voyager\\\\Models\\\\Role","table":"roles","type":"belongsToMany","column":"id","key":"id","label":"display_name","pivot_table":"user_roles","pivot":"1","taggable":"0"}', 11),
	(11, 1, 'locale', 'text', 'Locale', 0, 1, 1, 1, 1, 0, '', 12),
	(12, 1, 'settings', 'hidden', 'Settings', 0, 0, 0, 0, 0, 0, '', 12),
	(13, 2, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, '', 1),
	(14, 2, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, '', 2),
	(15, 2, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, '', 3),
	(16, 2, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '', 4),
	(17, 3, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, '', 1),
	(18, 3, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, '', 2),
	(19, 3, 'created_at', 'timestamp', 'Created At', 0, 0, 0, 0, 0, 0, '', 3),
	(20, 3, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '', 4),
	(21, 3, 'display_name', 'text', 'Display Name', 1, 1, 1, 1, 1, 1, '', 5),
	(22, 1, 'role_id', 'text', 'Role', 1, 1, 1, 1, 1, 1, '', 9),
	(23, 4, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
	(24, 4, 'parent_id', 'select_dropdown', 'Parent', 0, 1, 1, 1, 1, 0, '{"default":"","null":"","options":{"":"-- None --"},"relationship":{"key":"id","label":"name"}}', 2),
	(25, 4, 'order', 'text', 'Order', 1, 1, 1, 1, 1, 1, '{"default":1}', 3),
	(26, 4, 'name', 'text', 'Name', 1, 1, 1, 1, 1, 1, NULL, 4),
	(27, 4, 'slug', 'text', 'Slug', 1, 1, 1, 1, 1, 1, '{"slugify":{"origin":"name"}}', 5),
	(28, 4, 'created_at', 'timestamp', 'Created At', 0, 0, 1, 0, 0, 0, NULL, 6),
	(29, 4, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 7),
	(30, 5, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
	(31, 5, 'author_id', 'text', 'Author', 1, 1, 1, 1, 0, 1, NULL, 2),
	(32, 5, 'category_id', 'text', 'Category', 0, 0, 1, 1, 1, 0, NULL, 3),
	(33, 5, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, NULL, 4),
	(34, 5, 'excerpt', 'text_area', 'Excerpt', 0, 0, 1, 1, 1, 1, NULL, 5),
	(35, 5, 'body', 'rich_text_box', 'Body', 1, 0, 1, 1, 1, 1, NULL, 6),
	(36, 5, 'image', 'image', 'Post Image', 0, 1, 1, 1, 1, 1, '{"resize":{"width":"1000","height":"null"},"quality":"70%","upsize":true,"thumbnails":[{"name":"medium","scale":"50%"},{"name":"small","scale":"25%"},{"name":"cropped","crop":{"width":"300","height":"250"}}]}', 7),
	(37, 5, 'slug', 'text', 'Slug', 1, 0, 1, 1, 1, 1, '{"slugify":{"origin":"title","forceUpdate":true},"validation":{"rule":"unique:posts,slug"}}', 8),
	(38, 5, 'meta_description', 'text_area', 'Meta Description', 0, 0, 1, 1, 1, 1, NULL, 9),
	(39, 5, 'meta_keywords', 'text_area', 'Meta Keywords', 0, 0, 1, 1, 1, 1, NULL, 10),
	(40, 5, 'status', 'select_dropdown', 'Status', 1, 1, 1, 1, 1, 1, '{"default":"DRAFT","options":{"PUBLISHED":"published","DRAFT":"draft","PENDING":"pending"}}', 11),
	(41, 5, 'created_at', 'timestamp', 'Created At', 0, 0, 1, 0, 0, 0, NULL, 12),
	(42, 5, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 13),
	(43, 5, 'seo_title', 'text', 'SEO Title', 0, 0, 1, 1, 1, 1, NULL, 14),
	(44, 5, 'featured', 'checkbox', 'Featured', 1, 1, 1, 1, 1, 1, NULL, 15),
	(45, 6, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
	(46, 6, 'author_id', 'text', 'Author', 1, 0, 0, 0, 0, 0, NULL, 2),
	(47, 6, 'title', 'text', 'Title', 1, 1, 1, 1, 1, 1, NULL, 3),
	(48, 6, 'excerpt', 'text_area', 'Excerpt', 0, 0, 1, 1, 1, 1, NULL, 4),
	(49, 6, 'body', 'rich_text_box', 'Body', 0, 0, 1, 1, 1, 1, NULL, 5),
	(50, 6, 'slug', 'text', 'Slug', 1, 0, 1, 1, 1, 1, '{"slugify":{"origin":"title"},"validation":{"rule":"unique:pages,slug"}}', 6),
	(51, 6, 'meta_description', 'text', 'Meta Description', 0, 0, 1, 1, 1, 1, NULL, 7),
	(52, 6, 'meta_keywords', 'text', 'Meta Keywords', 0, 0, 1, 1, 1, 1, NULL, 8),
	(53, 6, 'status', 'select_dropdown', 'Status', 1, 1, 1, 1, 1, 1, '{"default":"INACTIVE","options":{"INACTIVE":"INACTIVE","ACTIVE":"ACTIVE"}}', 9),
	(54, 6, 'created_at', 'timestamp', 'Created At', 0, 1, 1, 0, 0, 0, NULL, 10),
	(55, 6, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 11),
	(56, 6, 'image', 'image', 'Page Image', 0, 1, 1, 1, 1, 1, NULL, 12),
	(57, 5, 'post_belongsto_user_relationship', 'relationship', 'users', 0, 1, 1, 1, 1, 1, '{"model":"TCG\\\\Voyager\\\\Models\\\\User","table":"users","type":"belongsTo","column":"author_id","key":"id","label":"name","pivot_table":"categories","pivot":"0","taggable":"0"}', 16),
	(58, 6, 'page_belongsto_user_relationship', 'relationship', 'users', 0, 1, 1, 1, 1, 1, '{"model":"TCG\\\\Voyager\\\\Models\\\\User","table":"users","type":"belongsTo","column":"author_id","key":"id","label":"name","pivot_table":"categories","pivot":"0","taggable":"0"}', 13),
	(59, 7, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, NULL, 1),
	(60, 7, 'author_id', 'select_dropdown', 'Author', 0, 0, 0, 0, 1, 1, NULL, 3),
	(61, 7, 'category_id', 'select_dropdown', 'Category', 0, 1, 1, 1, 1, 1, NULL, 4),
	(65, 7, 'image', 'image', 'Image', 0, 1, 1, 1, 1, 1, NULL, 9),
	(66, 7, 'slug', 'text', 'Slug', 0, 0, 0, 1, 1, 1, NULL, 10),
	(67, 7, 'status', 'select_dropdown', 'Status', 0, 1, 1, 1, 1, 1, '{"default":"DRAFT","options":{"PUBLISHED":"published","DRAFT":"draft","PENDING":"pending"}}', 11),
	(68, 7, 'featured', 'checkbox', 'Featured', 0, 1, 1, 1, 1, 1, NULL, 12),
	(69, 7, 'created_at', 'timestamp', 'Created At', 0, 0, 1, 1, 0, 1, NULL, 13),
	(70, 7, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, NULL, 14),
	(71, 7, 'content_belongsto_user_relationship', 'relationship', 'Author', 0, 0, 1, 0, 1, 1, '{"model":"TCG\\\\Voyager\\\\Models\\\\User","table":"users","type":"belongsTo","column":"author_id","key":"id","label":"name","pivot_table":"categories","pivot":"0","taggable":"0"}', 2),
	(72, 7, 'content_belongsto_category_relationship', 'relationship', 'category', 0, 1, 1, 1, 1, 1, '{"model":"TCG\\\\Voyager\\\\Models\\\\Category","table":"categories","type":"belongsTo","column":"category_id","key":"id","label":"name","pivot_table":"categories","pivot":"0","taggable":"0"}', 8),
	(73, 7, 'title', 'text', 'Title', 0, 1, 1, 1, 1, 1, NULL, 5),
	(74, 7, 'excerpt', 'text_area', 'Excerpt', 0, 0, 1, 1, 1, 1, NULL, 6),
	(75, 7, 'body', 'rich_text_box', 'Body', 0, 0, 1, 1, 1, 1, NULL, 7);
/*!40000 ALTER TABLE `data_rows` ENABLE KEYS */;

-- Dumping structure for table mgeologi.data_types
CREATE TABLE IF NOT EXISTS `data_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8 NOT NULL,
  `display_name_singular` varchar(255) CHARACTER SET utf8 NOT NULL,
  `display_name_plural` varchar(255) CHARACTER SET utf8 NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `model_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `policy_name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `controller` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `generate_permissions` tinyint(1) NOT NULL DEFAULT '0',
  `server_side` tinyint(4) NOT NULL DEFAULT '0',
  `details` text CHARACTER SET utf8,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `data_types_name_unique` (`name`),
  UNIQUE KEY `data_types_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.data_types: ~7 rows (approximately)
DELETE FROM `data_types`;
/*!40000 ALTER TABLE `data_types` DISABLE KEYS */;
INSERT INTO `data_types` (`id`, `name`, `slug`, `display_name_singular`, `display_name_plural`, `icon`, `model_name`, `policy_name`, `controller`, `description`, `generate_permissions`, `server_side`, `details`, `created_at`, `updated_at`) VALUES
	(1, 'users', 'users', 'User', 'Users', 'voyager-person', 'TCG\\Voyager\\Models\\User', 'TCG\\Voyager\\Policies\\UserPolicy', '', '', 1, 0, NULL, '2018-07-02 04:19:03', '2018-07-02 04:19:03'),
	(2, 'menus', 'menus', 'Menu', 'Menus', 'voyager-list', 'TCG\\Voyager\\Models\\Menu', NULL, '', '', 1, 0, NULL, '2018-07-02 04:19:03', '2018-07-02 04:19:03'),
	(3, 'roles', 'roles', 'Role', 'Roles', 'voyager-lock', 'TCG\\Voyager\\Models\\Role', NULL, '', '', 1, 0, NULL, '2018-07-02 04:19:03', '2018-07-02 04:19:03'),
	(4, 'categories', 'categories', 'Category', 'Categories', 'voyager-categories', 'TCG\\Voyager\\Models\\Category', NULL, NULL, NULL, 1, 0, '{"order_column":null,"order_display_column":null}', '2018-07-02 04:19:11', '2018-07-04 11:45:34'),
	(5, 'posts', 'posts', 'Post', 'Posts', 'voyager-news', 'TCG\\Voyager\\Models\\Post', 'TCG\\Voyager\\Policies\\PostPolicy', NULL, NULL, 1, 0, '{"order_column":null,"order_display_column":null}', '2018-07-02 04:19:13', '2018-07-04 11:13:36'),
	(6, 'pages', 'pages', 'Page', 'Pages', 'voyager-file-text', 'TCG\\Voyager\\Models\\Page', NULL, NULL, NULL, 1, 0, '{"order_column":null,"order_display_column":null}', '2018-07-02 04:19:14', '2018-07-04 11:50:52'),
	(7, 'contents', 'contents', 'Content', 'Contents', NULL, 'App\\Content', NULL, NULL, NULL, 1, 0, '{"order_column":null,"order_display_column":null}', '2018-07-04 13:23:49', '2018-07-04 13:23:49');
/*!40000 ALTER TABLE `data_types` ENABLE KEYS */;

-- Dumping structure for table mgeologi.menus
CREATE TABLE IF NOT EXISTS `menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `menus_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.menus: ~0 rows (approximately)
DELETE FROM `menus`;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'admin', '2018-07-02 04:19:05', '2018-07-02 04:19:05');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;

-- Dumping structure for table mgeologi.menu_items
CREATE TABLE IF NOT EXISTS `menu_items` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `menu_id` int(10) unsigned DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_self',
  `icon_class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `menu_items_menu_id_foreign` (`menu_id`),
  CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.menu_items: ~15 rows (approximately)
DELETE FROM `menu_items`;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;
INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `url`, `target`, `icon_class`, `color`, `parent_id`, `order`, `created_at`, `updated_at`, `route`, `parameters`) VALUES
	(1, 1, 'Dashboard', '', '_self', 'voyager-boat', NULL, NULL, 1, '2018-07-02 04:19:05', '2018-07-02 04:19:05', 'voyager.dashboard', NULL),
	(2, 1, 'Media', '', '_self', 'voyager-images', NULL, NULL, 4, '2018-07-02 04:19:05', '2018-07-05 13:18:45', 'voyager.media.index', NULL),
	(3, 1, 'Users', '', '_self', 'voyager-person', NULL, NULL, 3, '2018-07-02 04:19:05', '2018-07-02 04:19:05', 'voyager.users.index', NULL),
	(4, 1, 'Roles', '', '_self', 'voyager-lock', NULL, NULL, 2, '2018-07-02 04:19:05', '2018-07-02 04:19:05', 'voyager.roles.index', NULL),
	(5, 1, 'Tools', '', '_self', 'voyager-tools', NULL, NULL, 9, '2018-07-02 04:19:05', '2018-07-02 04:19:05', NULL, NULL),
	(6, 1, 'Menu Builder', '', '_self', 'voyager-list', NULL, 5, 1, '2018-07-02 04:19:05', '2018-07-05 13:18:46', 'voyager.menus.index', NULL),
	(7, 1, 'Database', '', '_self', 'voyager-data', NULL, 5, 2, '2018-07-02 04:19:05', '2018-07-05 13:18:46', 'voyager.database.index', NULL),
	(8, 1, 'Compass', '', '_self', 'voyager-compass', NULL, 5, 3, '2018-07-02 04:19:05', '2018-07-05 13:18:46', 'voyager.compass.index', NULL),
	(9, 1, 'BREAD', '', '_self', 'voyager-bread', NULL, 5, 4, '2018-07-02 04:19:05', '2018-07-05 13:18:46', 'voyager.bread.index', NULL),
	(10, 1, 'Settings', '', '_self', 'voyager-settings', NULL, NULL, 10, '2018-07-02 04:19:05', '2018-07-05 13:18:46', 'voyager.settings.index', NULL),
	(11, 1, 'Categories', '', '_self', 'voyager-categories', NULL, NULL, 8, '2018-07-02 04:19:12', '2018-07-02 04:19:12', 'voyager.categories.index', NULL),
	(12, 1, 'Posts', '', '_self', 'voyager-news', NULL, NULL, 6, '2018-07-02 04:19:14', '2018-07-02 04:19:14', 'voyager.posts.index', NULL),
	(13, 1, 'Pages', '', '_self', 'voyager-file-text', NULL, NULL, 7, '2018-07-02 04:19:15', '2018-07-02 04:19:15', 'voyager.pages.index', NULL),
	(14, 1, 'Hooks', '', '_self', 'voyager-hook', NULL, 5, 5, '2018-07-02 04:19:17', '2018-07-05 13:18:46', 'voyager.hooks', NULL),
	(15, 1, 'Konten', '', '_self', 'voyager-browser', '#000000', NULL, 5, '2018-07-04 13:23:51', '2018-07-05 13:20:14', 'voyager.contents.index', 'null');
/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;

-- Dumping structure for table mgeologi.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.migrations: ~26 rows (approximately)
DELETE FROM `migrations`;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2016_01_01_000000_add_voyager_user_fields', 1),
	(4, '2016_01_01_000000_create_data_types_table', 1),
	(5, '2016_05_19_173453_create_menu_table', 1),
	(6, '2016_10_21_190000_create_roles_table', 1),
	(7, '2016_10_21_190000_create_settings_table', 1),
	(8, '2016_11_30_135954_create_permission_table', 1),
	(9, '2016_11_30_141208_create_permission_role_table', 1),
	(10, '2016_12_26_201236_data_types__add__server_side', 1),
	(11, '2017_01_13_000000_add_route_to_menu_items_table', 1),
	(12, '2017_01_14_005015_create_translations_table', 1),
	(13, '2017_01_15_000000_make_table_name_nullable_in_permissions_table', 1),
	(14, '2017_03_06_000000_add_controller_to_data_types_table', 1),
	(15, '2017_04_21_000000_add_order_to_data_rows_table', 1),
	(16, '2017_07_05_210000_add_policyname_to_data_types_table', 1),
	(17, '2017_08_05_000000_add_group_to_settings_table', 1),
	(18, '2017_11_26_013050_add_user_role_relationship', 1),
	(19, '2017_11_26_015000_create_user_roles_table', 1),
	(20, '2018_03_11_000000_add_user_settings', 1),
	(21, '2018_03_14_000000_add_details_to_data_types_table', 1),
	(22, '2018_03_16_000000_make_settings_value_nullable', 1),
	(23, '2016_01_01_000000_create_pages_table', 2),
	(24, '2016_01_01_000000_create_posts_table', 2),
	(25, '2016_02_15_204651_create_categories_table', 2),
	(26, '2017_04_11_000000_alter_post_nullable_fields_table', 2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping structure for table mgeologi.pages
CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `status` enum('ACTIVE','INACTIVE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INACTIVE',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pages_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.pages: ~0 rows (approximately)
DELETE FROM `pages`;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` (`id`, `author_id`, `title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Hello World', 'Hang the jib grog grog blossom grapple dance the hempen jig gangway pressgang bilge rat to go on account lugger. Nelsons folly gabion line draught scallywag fire ship gaff fluke fathom case shot. Sea Legs bilge rat sloop matey gabion long clothes run a shot across the bow Gold Road cog league.', '<p>Hello World. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', 'pages/page1.jpg', 'hello-world', 'Yar Meta Description', 'Keyword1, Keyword2', 'ACTIVE', '2018-07-02 04:19:15', '2018-07-04 11:50:21');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;

-- Dumping structure for table mgeologi.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.password_resets: ~0 rows (approximately)
DELETE FROM `password_resets`;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Dumping structure for table mgeologi.permissions
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permissions_key_index` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.permissions: ~46 rows (approximately)
DELETE FROM `permissions`;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` (`id`, `key`, `table_name`, `created_at`, `updated_at`) VALUES
	(1, 'browse_admin', NULL, '2018-07-02 04:19:05', '2018-07-02 04:19:05'),
	(2, 'browse_bread', NULL, '2018-07-02 04:19:05', '2018-07-02 04:19:05'),
	(3, 'browse_database', NULL, '2018-07-02 04:19:05', '2018-07-02 04:19:05'),
	(4, 'browse_media', NULL, '2018-07-02 04:19:05', '2018-07-02 04:19:05'),
	(5, 'browse_compass', NULL, '2018-07-02 04:19:05', '2018-07-02 04:19:05'),
	(6, 'browse_menus', 'menus', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(7, 'read_menus', 'menus', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(8, 'edit_menus', 'menus', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(9, 'add_menus', 'menus', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(10, 'delete_menus', 'menus', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(11, 'browse_roles', 'roles', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(12, 'read_roles', 'roles', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(13, 'edit_roles', 'roles', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(14, 'add_roles', 'roles', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(15, 'delete_roles', 'roles', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(16, 'browse_users', 'users', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(17, 'read_users', 'users', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(18, 'edit_users', 'users', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(19, 'add_users', 'users', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(20, 'delete_users', 'users', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(21, 'browse_settings', 'settings', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(22, 'read_settings', 'settings', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(23, 'edit_settings', 'settings', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(24, 'add_settings', 'settings', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(25, 'delete_settings', 'settings', '2018-07-02 04:19:06', '2018-07-02 04:19:06'),
	(26, 'browse_categories', 'categories', '2018-07-02 04:19:12', '2018-07-02 04:19:12'),
	(27, 'read_categories', 'categories', '2018-07-02 04:19:12', '2018-07-02 04:19:12'),
	(28, 'edit_categories', 'categories', '2018-07-02 04:19:12', '2018-07-02 04:19:12'),
	(29, 'add_categories', 'categories', '2018-07-02 04:19:12', '2018-07-02 04:19:12'),
	(30, 'delete_categories', 'categories', '2018-07-02 04:19:12', '2018-07-02 04:19:12'),
	(31, 'browse_posts', 'posts', '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(32, 'read_posts', 'posts', '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(33, 'edit_posts', 'posts', '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(34, 'add_posts', 'posts', '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(35, 'delete_posts', 'posts', '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(36, 'browse_pages', 'pages', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(37, 'read_pages', 'pages', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(38, 'edit_pages', 'pages', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(39, 'add_pages', 'pages', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(40, 'delete_pages', 'pages', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(41, 'browse_hooks', NULL, '2018-07-02 04:19:17', '2018-07-02 04:19:17'),
	(42, 'browse_contents', 'contents', '2018-07-04 13:23:50', '2018-07-04 13:23:50'),
	(43, 'read_contents', 'contents', '2018-07-04 13:23:50', '2018-07-04 13:23:50'),
	(44, 'edit_contents', 'contents', '2018-07-04 13:23:50', '2018-07-04 13:23:50'),
	(45, 'add_contents', 'contents', '2018-07-04 13:23:50', '2018-07-04 13:23:50'),
	(46, 'delete_contents', 'contents', '2018-07-04 13:23:50', '2018-07-04 13:23:50');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;

-- Dumping structure for table mgeologi.permission_role
CREATE TABLE IF NOT EXISTS `permission_role` (
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_permission_id_index` (`permission_id`),
  KEY `permission_role_role_id_index` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.permission_role: ~45 rows (approximately)
DELETE FROM `permission_role`;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;
INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
	(1, 1),
	(2, 1),
	(3, 1),
	(4, 1),
	(5, 1),
	(6, 1),
	(7, 1),
	(8, 1),
	(9, 1),
	(10, 1),
	(11, 1),
	(12, 1),
	(13, 1),
	(14, 1),
	(15, 1),
	(16, 1),
	(17, 1),
	(18, 1),
	(19, 1),
	(20, 1),
	(21, 1),
	(22, 1),
	(23, 1),
	(24, 1),
	(25, 1),
	(26, 1),
	(27, 1),
	(28, 1),
	(29, 1),
	(30, 1),
	(31, 1),
	(32, 1),
	(33, 1),
	(34, 1),
	(35, 1),
	(36, 1),
	(37, 1),
	(38, 1),
	(39, 1),
	(40, 1),
	(42, 1),
	(43, 1),
	(44, 1),
	(45, 1),
	(46, 1);
/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;

-- Dumping structure for table mgeologi.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  `featured` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.posts: ~4 rows (approximately)
DELETE FROM `posts`;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`id`, `author_id`, `category_id`, `title`, `seo_title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `featured`, `created_at`, `updated_at`) VALUES
	(1, 2, 1, 'Lorem Ipsum Dolor sit amet Indonesia', '', 'This is the excerpt for the Lorem Ipsum Post', '<div class="post-header single">\n<div class="">\n<h2 class="wow fadeInLeft animated">MODE SEKARANG 2016&nbsp;</h2>\n</div>\n<hr />\n<div id="post-content" class="post-body single wow fadeInLeft animated">\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n<h3>Header Level 3</h3>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt</p>\n<ul>\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n<li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n</div>\n</div>', 'posts\\July2018\\yDF7EEsvxhrN3fmMVYKy.jpg', 'lorem-ipsum-dolor-sit-amet-indonesia', 'This is the meta description', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2018-07-02 04:19:14', '2018-07-04 08:36:43'),
	(2, 0, NULL, 'My Sample Post', NULL, 'This is the excerpt for the sample Post', '<p>This is the body for the sample post, which includes the body.</p>\n                <h2>We can use all kinds of format!</h2>\n                <p>And include a bunch of other stuff.</p>', 'posts/post2.jpg', 'my-sample-post', 'Meta Description for sample post', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(3, 0, NULL, 'Latest Post', NULL, 'This is the excerpt for the latest post', '<p>This is the body for the latest post</p>', 'posts/post3.jpg', 'latest-post', 'This is the meta description', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2018-07-02 04:19:14', '2018-07-02 04:19:14'),
	(4, 0, NULL, 'Yarr Post', NULL, 'Reef sails nipperkin bring a spring upon her cable coffer jury mast spike marooned Pieces of Eight poop deck pillage. Clipper driver coxswain galleon hempen halter come about pressgang gangplank boatswain swing the lead. Nipperkin yard skysail swab lanyard Blimey bilge water ho quarter Buccaneer.', '<p>Swab deadlights Buccaneer fire ship square-rigged dance the hempen jig weigh anchor cackle fruit grog furl. Crack Jennys tea cup chase guns pressgang hearties spirits hogshead Gold Road six pounders fathom measured fer yer chains. Main sheet provost come about trysail barkadeer crimp scuttle mizzenmast brig plunder.</p>\n<p>Mizzen league keelhaul galleon tender cog chase Barbary Coast doubloon crack Jennys tea cup. Blow the man down lugsail fire ship pinnace cackle fruit line warp Admiral of the Black strike colors doubloon. Tackle Jack Ketch come about crimp rum draft scuppers run a shot across the bow haul wind maroon.</p>\n<p>Interloper heave down list driver pressgang holystone scuppers tackle scallywag bilged on her anchor. Jack Tar interloper draught grapple mizzenmast hulk knave cable transom hogshead. Gaff pillage to go on account grog aft chase guns piracy yardarm knave clap of thunder.</p>', 'posts/post4.jpg', 'yarr-post', 'this be a meta descript', 'keyword1, keyword2, keyword3', 'PUBLISHED', 0, '2018-07-02 04:19:14', '2018-07-02 04:19:14');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table mgeologi.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.roles: ~2 rows (approximately)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'Administrator', '2018-07-02 04:19:05', '2018-07-02 04:19:05'),
	(2, 'user', 'Normal User', '2018-07-02 04:19:05', '2018-07-02 04:19:05');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Dumping structure for table mgeologi.settings
CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci,
  `details` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_key_unique` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.settings: ~10 rows (approximately)
DELETE FROM `settings`;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` (`id`, `key`, `display_name`, `value`, `details`, `type`, `order`, `group`) VALUES
	(1, 'site.title', 'Site Title', 'Museum Geologi', '', 'text', 1, 'Site'),
	(2, 'site.description', 'Site Description', 'Museum Geologi, Bandung, Kepuasan pengunjung prioritas kami', '', 'text', 2, 'Site'),
	(3, 'site.logo', 'Site Logo', 'settings\\July2018\\TrsgD2z25kUXUIf9oogq.png', '', 'image', 3, 'Site'),
	(4, 'site.google_analytics_tracking_id', 'Google Analytics Tracking ID', NULL, '', 'text', 4, 'Site'),
	(5, 'admin.bg_image', 'Admin Background Image', 'settings\\July2018\\S2Qv6niRNXlTzyzQJa4i.jpg', '', 'image', 5, 'Admin'),
	(6, 'admin.title', 'Admin Title', 'MG BACKEND', '', 'text', 1, 'Admin'),
	(7, 'admin.description', 'Admin Description', 'Welcome to Museum Geologi Backend.', '', 'text', 2, 'Admin'),
	(8, 'admin.loader', 'Admin Loader', '', '', 'image', 3, 'Admin'),
	(9, 'admin.icon_image', 'Admin Icon Image', 'settings\\July2018\\J2Vy1bZvv1suonRpH5MC.png', '', 'image', 4, 'Admin'),
	(10, 'admin.google_analytics_client_id', 'Google Analytics Client ID (used for admin dashboard)', NULL, '', 'text', 1, 'Admin');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;

-- Dumping structure for table mgeologi.translations
CREATE TABLE IF NOT EXISTS `translations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `column_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` int(10) unsigned NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `translations_table_name_column_name_foreign_key_locale_unique` (`table_name`,`column_name`,`foreign_key`,`locale`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.translations: ~77 rows (approximately)
DELETE FROM `translations`;
/*!40000 ALTER TABLE `translations` DISABLE KEYS */;
INSERT INTO `translations` (`id`, `table_name`, `column_name`, `foreign_key`, `locale`, `value`, `created_at`, `updated_at`) VALUES
	(1, 'data_types', 'display_name_singular', 5, 'pt', 'Post', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(2, 'data_types', 'display_name_singular', 6, 'pt', 'Página', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(3, 'data_types', 'display_name_singular', 1, 'pt', 'Utilizador', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(4, 'data_types', 'display_name_singular', 4, 'pt', 'Categoria', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(5, 'data_types', 'display_name_singular', 2, 'pt', 'Menu', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(6, 'data_types', 'display_name_singular', 3, 'pt', 'Função', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(7, 'data_types', 'display_name_plural', 5, 'pt', 'Posts', '2018-07-02 04:19:15', '2018-07-02 04:19:15'),
	(8, 'data_types', 'display_name_plural', 6, 'pt', 'Páginas', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(9, 'data_types', 'display_name_plural', 1, 'pt', 'Utilizadores', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(10, 'data_types', 'display_name_plural', 4, 'pt', 'Categorias', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(11, 'data_types', 'display_name_plural', 2, 'pt', 'Menus', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(12, 'data_types', 'display_name_plural', 3, 'pt', 'Funções', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(13, 'categories', 'slug', 1, 'pt', 'categoria-1', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(14, 'categories', 'name', 1, 'pt', 'Categoria 1', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(15, 'categories', 'slug', 2, 'pt', 'categoria-2', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(16, 'categories', 'name', 2, 'pt', 'Categoria 2', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(17, 'pages', 'title', 1, 'pt', 'Olá Mundo', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(18, 'pages', 'slug', 1, 'pt', 'ola-mundo', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(19, 'pages', 'body', 1, 'pt', '<p>Olá Mundo. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\r\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(20, 'menu_items', 'title', 1, 'pt', 'Painel de Controle', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(21, 'menu_items', 'title', 2, 'pt', 'Media', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(22, 'menu_items', 'title', 12, 'pt', 'Publicações', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(23, 'menu_items', 'title', 3, 'pt', 'Utilizadores', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(24, 'menu_items', 'title', 11, 'pt', 'Categorias', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(25, 'menu_items', 'title', 13, 'pt', 'Páginas', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(26, 'menu_items', 'title', 4, 'pt', 'Funções', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(27, 'menu_items', 'title', 5, 'pt', 'Ferramentas', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(28, 'menu_items', 'title', 6, 'pt', 'Menus', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(29, 'menu_items', 'title', 7, 'pt', 'Base de dados', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(30, 'menu_items', 'title', 10, 'pt', 'Configurações', '2018-07-02 04:19:16', '2018-07-02 04:19:16'),
	(31, 'categories', 'slug', 1, 'en', 'news', '2018-07-04 08:25:15', '2018-07-04 08:25:15'),
	(32, 'categories', 'name', 1, 'en', 'News', '2018-07-04 08:25:15', '2018-07-04 08:25:15'),
	(33, 'categories', 'slug', 2, 'en', 'event', '2018-07-04 08:26:02', '2018-07-04 08:26:02'),
	(34, 'categories', 'name', 2, 'en', 'Event', '2018-07-04 08:26:02', '2018-07-04 08:26:02'),
	(35, 'posts', 'title', 1, 'en', 'Lorem Ipsum Dolor sit amet English', '2018-07-04 08:36:43', '2018-07-04 08:36:43'),
	(36, 'posts', 'seo_title', 1, 'en', '', '2018-07-04 08:36:43', '2018-07-04 08:36:43'),
	(37, 'posts', 'excerpt', 1, 'en', 'This is the excerpt for the Lorem Ipsum Post', '2018-07-04 08:36:44', '2018-07-04 08:36:44'),
	(38, 'posts', 'body', 1, 'en', '<div class="">\n<h2 class="wow fadeInLeft animated">FASHION NOW 2016&nbsp;</h2>\n</div>\n<hr />\n<div id="post-content" class="post-body single wow fadeInLeft animated">\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n<h3>Header Level 3</h3>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt</p>\n<ul>\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n<li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n</div>', '2018-07-04 08:36:44', '2018-07-04 08:36:44'),
	(39, 'posts', 'slug', 1, 'en', 'lorem-ipsum-dolor-sit-amet-english', '2018-07-04 08:36:44', '2018-07-04 08:36:44'),
	(40, 'posts', 'meta_description', 1, 'en', 'This is the meta description', '2018-07-04 08:36:45', '2018-07-04 08:36:45'),
	(41, 'posts', 'meta_keywords', 1, 'en', 'keyword1, keyword2, keyword3', '2018-07-04 08:36:45', '2018-07-04 08:36:45'),
	(42, 'data_types', 'display_name_singular', 5, 'en', 'Post', '2018-07-04 11:13:36', '2018-07-04 11:13:36'),
	(43, 'data_types', 'display_name_plural', 5, 'en', 'Posts', '2018-07-04 11:13:36', '2018-07-04 11:13:36'),
	(44, 'data_types', 'display_name_singular', 4, 'en', 'Category', '2018-07-04 11:45:34', '2018-07-04 11:45:34'),
	(45, 'data_types', 'display_name_plural', 4, 'en', 'Categories', '2018-07-04 11:45:35', '2018-07-04 11:45:35'),
	(46, 'pages', 'title', 1, 'en', 'Hello World', '2018-07-04 11:50:21', '2018-07-04 11:50:21'),
	(47, 'pages', 'slug', 1, 'en', 'hello-world', '2018-07-04 11:50:21', '2018-07-04 11:50:21'),
	(48, 'pages', 'body', 1, 'en', '<p>Hello World. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', '2018-07-04 11:50:21', '2018-07-04 11:50:21'),
	(49, 'data_types', 'display_name_singular', 6, 'en', 'Page', '2018-07-04 11:50:52', '2018-07-04 11:50:52'),
	(50, 'data_types', 'display_name_plural', 6, 'en', 'Pages', '2018-07-04 11:50:53', '2018-07-04 11:50:53'),
	(51, 'data_types', 'display_name_singular', 7, 'en', 'Content', '2018-07-04 13:27:20', '2018-07-04 13:27:20'),
	(52, 'data_types', 'display_name_plural', 7, 'en', 'Contents', '2018-07-04 13:27:20', '2018-07-04 13:27:20'),
	(57, 'contents', 'title', 2, 'en', 'English Lorem ipsum dolor sit amet, consectetur adipiscing elit', '2018-07-04 14:11:54', '2018-07-04 14:11:54'),
	(58, 'contents', 'excerpt', 2, 'en', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt ', '2018-07-04 14:11:55', '2018-07-04 14:11:55'),
	(59, 'contents', 'body', 2, 'en', '<h2>FASHION NOW 2016</h2>\n<hr />\n<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n<h3>Header Level 3</h3>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt</p>\n<ul>\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n<li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>', '2018-07-04 14:11:55', '2018-07-04 14:25:40'),
	(60, 'contents', 'slug', 2, 'en', 'test', '2018-07-04 14:11:55', '2018-07-04 14:11:55'),
	(61, 'contents', 'title', 3, 'en', 'English Lorem ipsum dolor sit amet, consectetur adipiscing elit', '2018-07-04 14:12:04', '2018-07-04 14:12:04'),
	(62, 'contents', 'excerpt', 3, 'en', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt ', '2018-07-04 14:12:04', '2018-07-04 14:12:04'),
	(63, 'contents', 'body', 3, 'en', '<h2>FASHION NOW 2016</h2>\n<hr />\n<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n<h3>Header Level 3</h3>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt</p>\n<ul>\n<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n<li>Aliquam tincidunt mauris eu risus.</li>\n</ul>\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>', '2018-07-04 14:12:04', '2018-07-04 14:24:44'),
	(64, 'contents', 'slug', 3, 'en', 'test', '2018-07-04 14:12:04', '2018-07-04 14:12:04'),
	(65, 'menu_items', 'title', 15, 'en', 'Contents', '2018-07-05 13:20:13', '2018-07-05 13:20:13'),
	(66, 'contents', 'title', 7, 'en', 'Robust 24/7 product', '2018-07-05 14:38:12', '2018-07-05 14:38:12'),
	(67, 'contents', 'excerpt', 7, 'en', 'Quos numquam error veritatis ipsam commodi quo. Qui nostrum sit sunt. Facere quibusdam dignissimos officiis pariatur voluptas nihil amet.', '2018-07-05 14:38:12', '2018-07-05 14:38:12'),
	(68, 'contents', 'body', 7, 'en', 'Corporis consequuntur aut sunt quam repellendus. Est minus nobis saepe quibusdam distinctio beatae vel. Eligendi id nulla ad optio.', '2018-07-05 14:38:12', '2018-07-05 14:38:12'),
	(69, 'contents', 'slug', 7, 'en', 'robust-247-product', '2018-07-05 14:38:12', '2018-07-05 14:38:12'),
	(70, 'contents', 'title', 8, 'en', 'Right-sized 5thgeneration matrices', '2018-07-05 14:39:33', '2018-07-05 14:39:33'),
	(71, 'contents', 'excerpt', 8, 'en', 'Libero ad molestiae et qui. Vero sed amet veniam hic dolores omnis. Exercitationem impedit veritatis commodi quia repudiandae. Quas commodi dolor harum exercitationem accusantium necessitatibus.', '2018-07-05 14:39:33', '2018-07-05 14:39:33'),
	(72, 'contents', 'body', 8, 'en', 'Laborum occaecati recusandae earum. Aliquam et accusantium vero aut.', '2018-07-05 14:39:33', '2018-07-05 14:39:33'),
	(73, 'contents', 'slug', 8, 'en', 'right-sized-5thgeneration-matrices', '2018-07-05 14:39:33', '2018-07-05 14:39:33'),
	(74, 'contents', 'title', 4, 'en', 'Family scavenger hunt', '2018-07-05 14:44:41', '2018-07-05 14:59:26'),
	(75, 'contents', 'excerpt', 4, 'en', 'Suscipit nihil soluta est facilis et beatae animi. Consequatur dolore eum suscipit sed id. Numquam qui pariatur perferendis.', '2018-07-05 14:44:41', '2018-07-05 14:44:41'),
	(76, 'contents', 'body', 4, 'en', '<p>Qui quia impedit velit et dicta nemo ut. Placeat sunt sunt porro debitis eaque. Est iusto reiciendis doloribus doloremque ut.</p>', '2018-07-05 14:44:41', '2018-07-05 14:59:26'),
	(77, 'contents', 'slug', 4, 'en', 're-contextualized-local-circuit', '2018-07-05 14:44:41', '2018-07-05 14:44:41'),
	(78, 'contents', 'title', 13, 'en', 'Let’s Celebrate 25th Museum Day', '2018-07-05 14:54:33', '2018-07-05 14:54:33'),
	(79, 'contents', 'excerpt', 13, 'en', 'Eius provident neque et illum voluptatem aut hic temporibus. Voluptatem ut voluptatibus est atque dolorem placeat aut. Voluptas aperiam earum voluptatem animi et consequatur.', '2018-07-05 14:54:33', '2018-07-05 14:54:33'),
	(80, 'contents', 'body', 13, 'en', '<p>Sint blanditiis voluptatem nisi veniam. Natus officia nulla autem tempora assumenda velit itaque. Expedita ea non quaerat est. Error sed est eum porro est.</p>', '2018-07-05 14:54:33', '2018-07-05 14:54:33'),
	(81, 'contents', 'slug', 13, 'en', 'user-centric-needs-based-implementation', '2018-07-05 14:54:33', '2018-07-05 14:54:33');
/*!40000 ALTER TABLE `translations` ENABLE KEYS */;

-- Dumping structure for table mgeologi.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'users/default.png',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.users: ~2 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `role_id`, `name`, `email`, `avatar`, `password`, `remember_token`, `settings`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Admin', 'admin@admin.com', 'users\\July2018\\eHrfSOfPeZyc6JAiEOVW.jpeg', '$2y$10$7B3vdxHZIlurb2N3O6/tAeB5oZ2KlPLpSzZLfSweL.US0JWcZKWGy', 'r2xaYmkyQawHS8MZAGKIh5i0UyheGOjOD2wOgORIwMV3CAIw6HolAv0Mf7bN', '{"locale":"id"}', '2018-07-02 04:19:12', '2018-07-04 10:40:34'),
	(2, 1, 'Admin Oge', 'asep@sutisna.id', 'users\\July2018\\rToBWKkmAyVLgyBtqIrv.jpg', '$2y$10$lJWcI5h7yuspoOwCR0eeC.kc5jRkHQApVUWrL4rfloL/HT1PFQyeq', NULL, '{"locale":"id"}', '2018-07-04 08:20:48', '2018-07-04 08:20:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table mgeologi.user_roles
CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `user_roles_user_id_index` (`user_id`),
  KEY `user_roles_role_id_index` (`role_id`),
  CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table mgeologi.user_roles: ~0 rows (approximately)
DELETE FROM `user_roles`;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
