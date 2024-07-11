import 'package:flutter/material.dart';
import 'package:stylus/widgets/app_bar_widget.dart';
import '../widgets/BottomNavigationBar/nav_bar_widget.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: customAppBar(),
      backgroundColor: Colors.white,
      bottomNavigationBar: const BottomNavBar(),
    );
  }
}
