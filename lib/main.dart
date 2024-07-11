import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:stylus/pages/home.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'Theme/Theme.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  SystemChrome.setEnabledSystemUIMode(
    SystemUiMode.leanBack,
  );

  WebView.platform = SurfaceAndroidWebView();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: HomePage(),
    );
  }
}