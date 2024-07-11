class Dimensions {
  static double? screenHeight;
  static double? screenWidth;

  static double get pageViewContainer {
    if (screenHeight == null) {
      throw Exception("screenHeight is not initialized");
    }
    return screenHeight! / 3.84;
  }
}
