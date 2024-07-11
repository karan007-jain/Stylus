import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ProductDetails extends StatelessWidget {
  const ProductDetails({super.key});

  @override
  Widget build(BuildContext context) {
    return const SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: SizedBox(
          height: 740,
          width: double.infinity,
          child: WebView(
            debuggingEnabled: false,
            backgroundColor: Colors.transparent,
            initialUrl:
                // 'https://dsign4you.com/3d/?design=33335&q=hq&showcompanylogo=false',
              'https://youtube.com',
            javascriptMode: JavascriptMode.unrestricted,
          ),
        ),
      ),
    );
  }
}
