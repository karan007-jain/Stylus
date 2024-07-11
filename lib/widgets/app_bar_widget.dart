import 'package:flutter/material.dart';

AppBar customAppBar() {
  return AppBar(
    backgroundColor: Colors.orangeAccent,
    centerTitle: true,
    title: const Text(
      'Stylus',
      style: TextStyle(
          fontSize: 26,
          color: Colors.black,
          fontWeight: FontWeight.bold,
          letterSpacing: 0.80),
    ),
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(
        bottom: Radius.circular(30),
      ),
    ),
    leading: InkWell(
      onTap: () {},
      child: const Icon(
        Icons.ac_unit_rounded,
        color: Colors.black,
      ),
    ),
  );
}