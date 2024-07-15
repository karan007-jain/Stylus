import 'package:flutter/material.dart';
import 'package:stylus/widgets/app_bar_widget.dart';
<<<<<<< HEAD
import '../widgets/nav_bar_widget.dart';
import '../widgets/ModelView/webView.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});
=======
import '../widgets/BottomNavigationBar/nav_bar_widget.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);
>>>>>>> 798e8ae7f69aa128d4295041d5566701cc133afa

  @override
  Widget build(BuildContext context) {
    return Scaffold(
<<<<<<< HEAD
      backgroundColor: Colors.white,
      appBar: customAppBar(),
      body: const ProductDetails(
        heading: "Today's Fit",
        url: 'https://youtube.com',
      ),
=======
      appBar: customAppBar(),
      backgroundColor: Colors.white,
>>>>>>> 798e8ae7f69aa128d4295041d5566701cc133afa
      bottomNavigationBar: const BottomNavBar(),
    );
  }
}
