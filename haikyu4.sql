-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 06:05 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `haikyu`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `name` varchar(500) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`name`, `pass`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `bookstatus`
--

CREATE TABLE `bookstatus` (
  `statusID` int(10) NOT NULL,
  `email` varchar(500) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `serialnumber` varchar(500) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `device_type` varchar(500) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `method` varchar(500) DEFAULT NULL,
  `payment` varchar(500) DEFAULT NULL,
  `status` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookstatus`
--

INSERT INTO `bookstatus` (`statusID`, `email`, `serialnumber`, `device_type`, `method`, `payment`, `status`) VALUES
(1, 'dinie03@gmail.com', 'fasdfasdfas', 'laptop', 'home', 'COD', 0),
(2, 'dinie03@gmail.com', 'fasdfasdfas', 'laptop', 'home', 'COD', 0);

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `deviceID` int(10) NOT NULL,
  `email` varchar(500) NOT NULL,
  `serialnumber` varchar(500) NOT NULL,
  `device_type` varchar(500) NOT NULL,
  `problem` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`deviceID`, `email`, `serialnumber`, `device_type`, `problem`) VALUES
(17, 'dinie03@gmail.com', 'fasdfasdfas', 'laptop', '200,0,0');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payID` int(10) NOT NULL,
  `email` varchar(500) NOT NULL,
  `payment` varchar(500) DEFAULT NULL,
  `bankname` varchar(500) DEFAULT NULL,
  `namecard` varchar(500) DEFAULT NULL,
  `cardnumber` varchar(500) DEFAULT NULL,
  `expireddate` varchar(500) DEFAULT NULL,
  `cvv` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payID`, `email`, `payment`, `bankname`, `namecard`, `cardnumber`, `expireddate`, `cvv`) VALUES
(13, 'dinie03@gmail.com', 'COD', '0', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `serviceID` int(10) NOT NULL,
  `email` varchar(500) NOT NULL,
  `method` varchar(500) DEFAULT NULL,
  `streetaddress` varchar(500) DEFAULT NULL,
  `city` varchar(500) DEFAULT NULL,
  `state_home` varchar(500) DEFAULT NULL,
  `postcode_home` varchar(500) DEFAULT NULL,
  `address_pickup` varchar(500) DEFAULT NULL,
  `state_pickup` varchar(500) DEFAULT NULL,
  `postcode_pickup` varchar(500) DEFAULT NULL,
  `tracking` varchar(500) DEFAULT NULL,
  `courier` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`serviceID`, `email`, `method`, `streetaddress`, `city`, `state_home`, `postcode_home`, `address_pickup`, `state_pickup`, `postcode_pickup`, `tracking`, `courier`) VALUES
(23, 'dinie03@gmail.com', 'home', 'fasdfsadf', 'sdfasdfs', 'kedah', 'sdfasfas', '', '', '', '', '0'),
(24, 'dinie03@gmail.com', 'home', 'fasdfsadf', 'sdfasdfs', 'kedah', 'sdfasfas', '', '', '', '', '0');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(500) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `phone` int(15) NOT NULL,
  `address` varchar(500) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `firstname`, `lastname`, `username`, `phone`, `address`, `password`) VALUES
('dinie03@gmail.com', 'sdfsdfas', 'sadfasdf', 'sdfasdfa', 2147483647, '4234wfsdfdsfsafs', '123'),
('illy01@gmail.com', 'illy', 'athirah', 'ly', 1135020792, 'bidor', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookstatus`
--
ALTER TABLE `bookstatus`
  ADD PRIMARY KEY (`statusID`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`deviceID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payID`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`serviceID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookstatus`
--
ALTER TABLE `bookstatus`
  MODIFY `statusID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `deviceID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `serviceID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
