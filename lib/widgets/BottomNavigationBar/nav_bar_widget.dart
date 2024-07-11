import 'package:flutter/material.dart';

class BottomNavBar extends StatefulWidget {
  const BottomNavBar({super.key});

  @override
  State<BottomNavBar> createState() => _BottomNavBarState();
}
  List<IconData> navIcon = [
    Icons.home_rounded,
    Icons.store_rounded,
    Icons.dashboard_customize_rounded,
    Icons.person_rounded,
  ];

  List<String> navTitle = [
    "Home",
    "Wardrobe",
    "Customize",
    "Person"
  ];

int selectedIndex = 0;
class _BottomNavBarState extends State<BottomNavBar> {


  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomCenter,
      child: _navBar(),
    );
  }

  Widget _navBar() {
    return Container(
      height: 65,
      margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 24),
      decoration: BoxDecoration(
        color: Colors.orangeAccent,
        borderRadius: BorderRadius.circular(50),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withAlpha(30),
            blurRadius: 20,
            spreadRadius: 5,
          ),
        ],
      ),

      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: navIcon.asMap().entries.map((entry) {
          int index = entry.key;
          IconData icon = entry.value;
          bool isSelected = selectedIndex == index;
          return Expanded(
            child: GestureDetector(
              onTap: () {
                setState(() {
                  selectedIndex = index;
                });
              },
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    icon,
                    size: isSelected ? 30 : 24,
                    color: isSelected ? Colors.white : Colors.black87,
                  ),
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
