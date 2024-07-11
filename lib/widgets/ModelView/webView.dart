import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ProductDetails extends StatefulWidget {
  final String heading;
  final String url;

  const ProductDetails({super.key, required this.heading, required this.url});

  @override
  State<ProductDetails> createState() => _ProductDetailsState();
}

class _ProductDetailsState extends State<ProductDetails> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12.0, 2.5, 12.0, 2.5),
              child: Center(
                child: Text(
                  widget.heading,
                  style: const TextStyle(
                    fontSize: 26.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ),
            ),
            Expanded(
              child: _CurvedWebView(
                url: widget.url,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _CurvedWebView extends StatelessWidget {
  final String url;

  const _CurvedWebView({super.key, required this.url});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(30.0),
          border: Border.all(
            color: Colors.black,
            width: 3.0,
          ),
        ),

          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(30.0),
            child: WebView(
              debuggingEnabled: false,
              backgroundColor: Colors.transparent,
              initialUrl: url,
              javascriptMode: JavascriptMode.unrestricted,
            ),
          ),
        ),
      ),
    );
  }
}
