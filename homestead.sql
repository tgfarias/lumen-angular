-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 28-Ago-2018 às 19:04
-- Versão do servidor: 10.1.19-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homestead`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_08_27_203854_create_sistemas_table', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sistemas`
--

CREATE TABLE `sistemas` (
  `id` int(10) UNSIGNED NOT NULL,
  `descricao` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sigla` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `sistemas`
--

INSERT INTO `sistemas` (`id`, `descricao`, `sigla`, `email`, `url`, `status`, `created_at`, `updated_at`) VALUES
(1, 'ADMINISTRATIVO DO WEB SERVICE', 'wsadmin', NULL, 'https://wss.mec.gov.br/ws-admin/inicial.xhtml', 1, NULL, NULL),
(2, 'BANCO DE EXPERIÊNCIAS DE CONSELHOS ESCOLARES', 'SGBEGE', NULL, 'http://bancodeexperienciasce.mec.gov.br/acesso/lo', 1, NULL, NULL),
(3, 'CENSO ESCOLAR WEB', '', '', '', 1, '2018-08-28 14:42:56', '2018-08-28 14:42:56'),
(4, 'CENSO ESCOLAR WEB2', '', '', '', 1, '2018-08-28 15:06:30', '2018-08-28 15:06:30'),
(5, 'CENSO ESCOLAR WEB3', '', '', '', 1, '2018-08-28 15:06:50', '2018-08-28 15:06:50'),
(6, '', '', NULL, NULL, 1, '2018-08-28 15:59:27', '2018-08-28 15:59:27'),
(7, '', '', NULL, NULL, 1, '2018-08-28 16:00:40', '2018-08-28 16:00:40'),
(8, '', '', NULL, NULL, 1, '2018-08-28 16:05:28', '2018-08-28 16:05:28'),
(9, '', '', NULL, NULL, 1, '2018-08-28 16:05:47', '2018-08-28 16:05:47'),
(10, '', '', NULL, NULL, 1, '2018-08-28 16:09:01', '2018-08-28 16:09:01'),
(11, '', '', NULL, NULL, 1, '2018-08-28 16:11:29', '2018-08-28 16:11:29'),
(12, 'CENSO ESCOLAR WEB4', '', '', '', 1, '2018-08-28 16:13:41', '2018-08-28 16:13:41'),
(13, 'CENSO ESCOLAR WEB5', '', '', 'null', 1, '2018-08-28 16:14:11', '2018-08-28 16:14:11'),
(14, '', '', NULL, NULL, 1, '2018-08-28 16:14:23', '2018-08-28 16:14:23'),
(15, '', '', NULL, NULL, 1, '2018-08-28 16:14:56', '2018-08-28 16:14:56'),
(16, '', '', NULL, NULL, 1, '2018-08-28 16:15:56', '2018-08-28 16:15:56'),
(17, 'creater3', '', '', NULL, 1, '2018-08-28 16:24:49', '2018-08-28 16:24:49'),
(18, 'CONSELHO NACIONAL DE RESIDÊNCIA', '', '', 'https://cnrms.mec.gov.br', 1, '2018-08-28 16:26:13', '2018-08-28 16:26:13'),
(19, '', '', NULL, NULL, 1, '2018-08-28 16:26:49', '2018-08-28 16:26:49'),
(20, '', '', NULL, NULL, 1, '2018-08-28 16:26:58', '2018-08-28 16:26:58'),
(21, '', '', NULL, NULL, 1, '2018-08-28 16:27:16', '2018-08-28 16:27:16'),
(22, 'teste3', '', '', NULL, 1, '2018-08-28 16:30:53', '2018-08-28 16:30:53'),
(23, 'Testando submissão', '', '', NULL, 1, '2018-08-28 16:34:06', '2018-08-28 16:34:06'),
(24, 'testess', '', '', NULL, 1, '2018-08-28 16:35:10', '2018-08-28 16:35:10'),
(25, 'asdawww', '', '', NULL, 1, '2018-08-28 16:36:02', '2018-08-28 16:36:02'),
(26, 'asdaawww', '', '', NULL, 1, '2018-08-28 16:36:20', '2018-08-28 16:36:20'),
(27, 'asdasdas', '', '', NULL, 1, '2018-08-28 16:37:10', '2018-08-28 16:37:10'),
(28, 'asdasdas', '', '', NULL, 1, '2018-08-28 16:38:35', '2018-08-28 16:38:35'),
(29, 'tttttttttt', '', '', 'https://vimeo.com/254613751', 1, '2018-08-28 16:39:39', '2018-08-28 16:39:39'),
(30, 'TESTE SIGLA', '', 'tgfarias@gmail.com', 'https://vimeo.com/254616035', 1, '2018-08-28 16:40:59', '2018-08-28 16:40:59'),
(31, 'TESTE SIGLA', '', 'tgfarias@gmail.com', 'https://vimeo.com/254616035', 1, '2018-08-28 16:43:12', '2018-08-28 16:43:12'),
(32, 'TESTE SIGLA', 'SIGLA', 'tgfarias@gmail.com', 'https://vimeo.com/254616035', 1, '2018-08-28 16:44:17', '2018-08-28 16:44:17'),
(33, 'teste save sigla', 'asisgla', '', NULL, 1, '2018-08-28 16:44:41', '2018-08-28 16:44:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sistemas`
--
ALTER TABLE `sistemas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sistemas`
--
ALTER TABLE `sistemas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
