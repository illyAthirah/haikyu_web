-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2024 at 06:43 AM
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
  `deviceID` int(10) NOT NULL,
  `serviceID` int(10) NOT NULL,
  `payID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'dinie03@gmail.com', 'sdfsfsa', 'laptop', '400,0,0'),
(2, 'dinie03@gmail.com', 'dsfasdf', 'laptop', '200,0,0'),
(3, 'dinie03@gmail.com', 'ewfsd', 'laptop', '200,0,0'),
(4, 'dinie03@gmail.com', 'sfasdfsa', 'tv', '0,200,0'),
(5, 'dinie03@gmail.com', 'wrerfdfg', 'phone', '0,0,200'),
(6, 'dinie03@gmail.com', 'vbhjk', 'laptop', '200,0,0'),
(7, 'dinie03@gmail.com', 'bnm,', 'phone', '0,0,250'),
(8, 'dinie03@gmail.com', 'vj', 'laptop', '150,0,0'),
(9, 'dinie03@gmail.com', 'fghjk', 'laptop', '200,0,0'),
(10, 'dinie03@gmail.com', 'sdfsdfs', 'tv', '0,60,0'),
(11, 'dinie03@gmail.com', 'sfdffss', 'tv', '0,200,0'),
(12, 'dinie03@gmail.com', 'xcghjk', 'laptop', '200,0,0'),
(13, 'dinie03@gmail.com', 'nm,', 'laptop', '200,0,0'),
(14, 'dinie03@gmail.com', 'dvdczx', 'laptop', '70,0,0'),
(15, 'dinie03@gmail.com', 'ghjkl;.', 'laptop', '200,0,0');

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
(1, 'undefined', 'bank', '12', '', '', '', ''),
(2, 'dinie03@gmail.com', '7e', '0', '', '', '', ''),
(3, 'dinie03@gmail.com', 'bank', '13', '', '', '', ''),
(4, 'dinie03@gmail.com', 'debit', '11', 'xcghjk', 'nm,nm', '2024-01-11', 'cvbnm'),
(5, 'dinie03@gmail.com', '7e', '0', '', '', '', ''),
(6, 'dinie03@gmail.com', 'bank', '12', '', '', '', ''),
(7, 'dinie03@gmail.com', 'bank', '12', '', '', '', ''),
(8, 'dinie03@gmail.com', 'bank', '10', '', '', '', ''),
(9, 'undefined', 'bank', '10', '', '', '', ''),
(10, 'dinie03@gmail.com', 'bank', '12', '', '', '', ''),
(11, 'dinie03@gmail.com', 'bank', '12', '', '', '', '');

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
(1, 'dinie03@gmail.com', 'post', '', '', 'undefined', '', 'address', 'undefined', 'undefined', 'fsdfsdff', '4'),
(2, 'dinie03@gmail.com', 'post', '', '', 'undefined', '', 'address', 'undefined', 'undefined', 'fsdfsdff', '4'),
(3, 'dinie03@gmail.com', 'post', '', '', 'undefined', '', 'address', 'undefined', 'undefined', 'kl', '2'),
(4, 'dinie03@gmail.com', 'post', '', '', 'undefined', '', 'address', 'undefined', 'undefined', 'kl', '2'),
(5, 'dinie03@gmail.com', 'pickup', '', '', 'select', '', 'cghjk', 'negerisembilan', 'undefined', '', '0'),
(6, 'dinie03@gmail.com', 'pickup', '', '', 'select', '', 'cghjk', 'negerisembilan', 'undefined', '', '0'),
(7, 'dinie03@gmail.com', 'post', '', '', '', '', 'address', '', 'postcode', 'n', '3'),
(8, 'dinie03@gmail.com', 'post', '', '', '', '', 'address', '', 'postcode', 'n', '3'),
(9, 'dinie03@gmail.com', 'post', '', '', '', '', 'address', '', 'postcode', 'xcvbm,.', '3'),
(10, 'dinie03@gmail.com', 'post', '', '', '', '', 'address', '', 'postcode', 'xcvbm,.', '3'),
(11, 'dinie03@gmail.com', 'post', '', '', '', '', '', '', '', 'sdfsfs', '5'),
(12, 'dinie03@gmail.com', 'post', '', '', '', '', '', '', '', 'sdfsfs', '5'),
(13, 'dinie03@gmail.com', 'home', 'dsfsdfsa', 'dfasdfsdffsdf', 'johor', 'dfasfsad', '', '', '', '', '0'),
(14, 'dinie03@gmail.com', 'home', 'dsfsdfsa', 'dfasdfsdffsdf', 'johor', 'dfasfsad', '', '', '', '', '0'),
(15, 'dinie03@gmail.com', 'post', '', '', '', '', '', '', '', 'jkl', '2'),
(16, 'dinie03@gmail.com', 'post', '', '', '', '', '', '', '', 'jkl', '2'),
(17, 'dinie03@gmail.com', 'pickup', '', '', '', '', 'csdfsdf', 'terengganu', 'sdfsdfdf', '', '0'),
(18, 'dinie03@gmail.com', 'pickup', '', '', '', '', 'csdfsdf', 'terengganu', 'sdfsdfdf', '', '0'),
(19, 'dinie03@gmail.com', 'post', '', '', '', '', '', '', '', 'cvbnm,.', '4'),
(20, 'dinie03@gmail.com', 'post', '', '', '', '', '', '', '', 'cvbnm,.', '4');

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
('undefined', 'undefined', 'illy', 'illy@gmail.com', 1135020792, 'undefined', 'illy1779');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookstatus`
--
ALTER TABLE `bookstatus`
  ADD PRIMARY KEY (`statusID`),
  ADD KEY `email` (`deviceID`,`serviceID`,`payID`),
  ADD KEY `serviceID` (`serviceID`),
  ADD KEY `payID` (`payID`);

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
  MODIFY `deviceID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `serviceID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookstatus`
--
ALTER TABLE `bookstatus`
  ADD CONSTRAINT `bookstatus_ibfk_2` FOREIGN KEY (`serviceID`) REFERENCES `service` (`serviceID`),
  ADD CONSTRAINT `bookstatus_ibfk_3` FOREIGN KEY (`payID`) REFERENCES `payment` (`payID`),
  ADD CONSTRAINT `bookstatus_ibfk_4` FOREIGN KEY (`deviceID`) REFERENCES `device` (`deviceID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
