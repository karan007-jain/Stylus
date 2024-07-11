import 'package:flutter/material.dart';
import 'package:stylus/widgets/app_bar_widget.dart';
import '../widgets/nav_bar_widget.dart';
import '../widgets/ModelView/webView.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: customAppBar(),
      body: const ProductDetails(
        heading: "Today's Fit",
        url: 'https://youtube.com',
      ),
      bottomNavigationBar: const BottomNavBar(),
    );
  }
}
