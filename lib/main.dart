import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:stylus/pages/home.dart';
<<<<<<< HEAD
import 'package:webview_flutter/webview_flutter.dart';
=======
>>>>>>> 798e8ae7f69aa128d4295041d5566701cc133afa

import 'Theme/Theme.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  SystemChrome.setEnabledSystemUIMode(
    SystemUiMode.leanBack,
  );

<<<<<<< HEAD
  WebView.platform = SurfaceAndroidWebView();

=======
>>>>>>> 798e8ae7f69aa128d4295041d5566701cc133afa
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
<<<<<<< HEAD
  const MyApp({super.key});
=======
  const MyApp({Key? key}) : super(key: key);
>>>>>>> 798e8ae7f69aa128d4295041d5566701cc133afa

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
<<<<<<< HEAD
      home: const HomePage(),
=======
      home: HomePage(),
>>>>>>> 798e8ae7f69aa128d4295041d5566701cc133afa
    );
  }
}
