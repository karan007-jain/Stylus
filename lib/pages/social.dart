import 'package:flutter/material.dart';
import '../widgets/ModelView/webView.dart';

import '../widgets/nav_bar_widget.dart';
import '../widgets/app_bar_widget.dart';

class Social extends StatelessWidget {
  const Social({super.key});

  @override
    Widget build(BuildContext context) {
      return Scaffold(
        backgroundColor: Colors.white,
        appBar: customAppBar(),
        body: const ProductDetails(
          heading: "Sartorial",
          url: 'https://youtube.com',
        ),
        bottomNavigationBar: const BottomNavBar(),
      );
    }
  }
