import 'package:flutter/material.dart';

import '../widgets/ModelView/webView.dart';
import '../widgets/nav_bar_widget.dart';
import '../widgets/app_bar_widget.dart';

class CustomWardrobe extends StatelessWidget {
  const CustomWardrobe({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: customAppBar(),
      body: const ProductDetails(
        heading: "Customs Clothing",
        url: 'https://youtube.com',
      ),
      bottomNavigationBar: const BottomNavBar(),
    );
  }
}
