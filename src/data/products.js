
export const Products = [
  {
    id: 1,
    name: "Lamp",
    price: 350,
    description: "Item used in lighting places",
    details_desc: "Elegant table lamp crafted with a durable frame and premium shade. Provides a warm, cozy glow that enhances any room’s ambiance. Ideal for bedrooms, living rooms, or study corners. A blend of style, comfort, and functionality.",
    images: [
      require("../../assets/products/lamp_1.jpg"),
      require("../../assets/products/lamp_2.jpg"),
      require("../../assets/products/lamp_3.jpg")
    ],
    specifications: [
      { label: "Material", value: "Metal & Fabric" },
      { label: "Height", value: "40 cm" },
      { label: "Light Source", value: "E27 bulb" },
      { label: "Power", value: "40W max" },
      { label: "Weight", value: "1.2 kg" },
    ]
  },
  {
    id: 2,
    name: "LED Bulb",
    price: 40,
    description: "Energy-efficient LED bulb with 9W power",
    details_desc: "Energy-saving 9W LED bulb delivering bright, clear light. Designed to reduce electricity costs while lasting over 25,000 hours. Perfect for both home and office use. Eco-friendly lighting without sacrificing brightness.",
    images: [
      require("../../assets/products/LED_Bulb_1.jpg"),
      require("../../assets/products/LED_Bulb_2.jpg"),
      require("../../assets/products/LED_Bulb_3.jpg")
    ],
    specifications: [
      { label: "Wattage", value: "9W" },
      { label: "Light Color", value: "Warm White (3000K)" },
      { label: "Lifespan", value: "25,000 hours" },
      { label: "Base Type", value: "E27" },
      { label: "Voltage", value: "220-240V" },
    ]
  },
  {
    id: 3,
    name: "Desk Lamp",
    price: 120,
    description: "Adjustable desk lamp for study and work",
    details_desc: "Adjustable arm desk lamp with flexible neck for precise lighting. Offers soft, glare-free illumination for reading, studying, or working. Sleek design suits any modern workspace. Built to reduce eye strain during long hours.",
    images: [
      require("../../assets/products/Desk_Lamp_1.jpg"),
      require("../../assets/products/Desk_Lamp_2.jpg"),
      require("../../assets/products/Desk_Lamp_3.jpg"),
    ],
    specifications: [
      { label: "Material", value: "Aluminum & Plastic" },
      { label: "Height", value: "45 cm" },
      { label: "Light Source", value: "LED" },
      { label: "Brightness Levels", value: "3" },
      { label: "Power", value: "5W" },
    ]
  },
  {
    id: 4,
    name: "Ceiling Fan",
    price: 650,
    description: "3-blade ceiling fan with modern design",
    details_desc: "Modern 3-blade ceiling fan with smooth, quiet operation. Provides powerful airflow to keep rooms cool even in peak summer. Energy-efficient motor for long-term use. Complements both contemporary and classic interiors.",
    images: [
      require("../../assets/products/Ceiling_Fan_1.jpg"),
      require("../../assets/products/Ceiling_Fan_2.jpg"),
      require("../../assets/products/Ceiling_Fan_3.jpg")
    ],
    specifications: [
      { label: "Blades", value: "3" },
      { label: "Blade Material", value: "ABS Plastic" },
      { label: "Sweep Size", value: "1200 mm" },
      { label: "Motor Power", value: "75W" },
      { label: "Speed Settings", value: "3" },
    ]
  },
  {
    id: 5,
    name: "Smart Plug",
    price: 150,
    description: "WiFi-enabled smart plug for home automation",
    details_desc: "WiFi-enabled smart plug for remote appliance control via mobile app. Compatible with Alexa and Google Assistant for voice commands. Compact and safe design for daily use. Helps automate your home easily.",
    images: [
      require("../../assets/products/Smart_Plug_1.jpg"),
      require("../../assets/products/Smart_Plug_2.jpg"),
      require("../../assets/products/Smart_Plug_3.jpg")
    ],
    specifications: [
      { label: "Connectivity", value: "WiFi 2.4GHz" },
      { label: "Max Load", value: "2200W" },
      { label: "Control", value: "App + Voice" },
      { label: "Voltage", value: "220-240V" },
      { label: "Compatibility", value: "Alexa, Google Assistant" },
    ]
  },
  {
    id: 6,
    name: "Extension Cord",
    price: 70,
    description: "4-socket extension cord with surge protection",
    details_desc: "Four-socket extension cord with surge protection for device safety. Heavy-duty build supports multiple high-power appliances. Long cable for flexibility in placement. Ideal for both home and office setups.",
    images: [
      require("../../assets/products/Extension_Cord_1.jpg"),
      require("../../assets/products/Extension_Cord_2.jpg")
    ],
    specifications: [
      { label: "Sockets", value: "4" },
      { label: "Cord Length", value: "3 meters" },
      { label: "Voltage", value: "250V" },
      { label: "Max Load", value: "3250W" },
      { label: "Safety Feature", value: "Surge Protection" }
    ]
  },
  {
    id: 7,
    name: "USB Charger",
    price: 45,
    description: "Dual-port USB wall charger 2.4A",
    details_desc: "Compact dual-port USB charger delivering 2.4A for fast charging. Works with smartphones, tablets, and other USB-powered devices. Lightweight and travel-friendly. Built-in safety features prevent overheating and overcharging.",
    images: [
      require("../../assets/products/USB_Charger_1.jpg"),
      require("../../assets/products/USB_Charger_2.jpg")
    ],
    specifications: [
      { label: "Ports", value: "2 USB-A" },
      { label: "Output", value: "5V / 2.4A" },
      { label: "Input Voltage", value: "100–240V" },
      { label: "Weight", value: "60g" },
      { label: "Safety", value: "Overheat & Overcharge Protection" }
    ]
  },
  {
    id: 8,
    name: "Table Fan",
    price: 200,
    description: "Portable table fan with adjustable speed",
    details_desc: "Portable table fan with three adjustable speeds for customized airflow. 90° oscillation ensures even air distribution. Lightweight yet sturdy build for easy placement. Perfect for desks, bedrooms, and small spaces.",
    images: [
      require("../../assets/products/Table_Fan_1.jpg"),
      require("../../assets/products/Table_Fan_2.jpg"),
      require("../../assets/products/Table_Fan_3.jpg")
    ],
    specifications: [
      { label: "Speed Settings", value: "3" },
      { label: "Oscillation", value: "90°" },
      { label: "Power", value: "45W" },
      { label: "Blade Diameter", value: "12 inches" },
      { label: "Noise Level", value: "40 dB" }
    ]
  },
  {
    id: 9,
    name: "Electric Heater",
    price: 500,
    description: "Compact electric room heater",
    details_desc: "Compact room heater with adjustable thermostat for personalized comfort. Delivers instant warmth during cold seasons. Safety features include overheat and tip-over protection. Portable and easy to move between rooms.",
    images: [
      require("../../assets/products/Electric_Heater_1.jpg"),
      require("../../assets/products/Electric_Heater_2.jpg")
    ],
    specifications: [
      { label: "Power", value: "1500W" },
      { label: "Heating Element", value: "Ceramic" },
      { label: "Thermostat", value: "Adjustable" },
      { label: "Safety Features", value: "Overheat & Tip-over Protection" },
      { label: "Coverage Area", value: "15–20 m²" }
    ]
  },
  {
    id: 10,
    name: "Power Bank",
    price: 300,
    description: "10000mAh portable power bank",
    details_desc: "Sleek 10,000mAh power bank for reliable charging on the go. Dual USB ports allow multiple devices to charge simultaneously. Compact design fits easily in pockets and bags. Perfect for travel and emergencies.",
    images: [require("../../assets/products/Power_Bank.jpg"), require("../../assets/products/Power_Bank.jpg")],
    specifications: [
      { label: "Capacity", value: "10,000mAh" },
      { label: "Input", value: "Micro USB / USB-C" },
      { label: "Output", value: "2 × USB-A (5V/2.1A)" },
      { label: "Weight", value: "220g" },
      { label: "Dimensions", value: "14 × 7 × 1.5 cm" }
    ]
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 250,
    description: "Wireless Bluetooth speaker with bass boost",
    details_desc: "Portable Bluetooth speaker delivering rich, clear sound with enhanced bass. Connects easily to smartphones, tablets, and laptops. Long battery life for hours of music on the go. Compact design makes it travel-friendly.",
    images: [
      require("../../assets/products/Bluetooth_Speaker_1.jpg"),
      require("../../assets/products/Bluetooth_Speaker_2.jpg"),
      require("../../assets/products/Bluetooth_Speaker_3.jpg"),
      require("../../assets/products/Bluetooth_Speaker_4.jpg"),
    ],
    specifications: [
      { label: "Bluetooth Version", value: "5.0" },
      { label: "Battery Life", value: "10 hours" },
      { label: "Charging Time", value: "2 hours" },
      { label: "Output Power", value: "15W" },
      { label: "Dimensions", value: "20 × 7 × 7 cm" },
    ],
  },
  {
    id: 12,
    name: "Smart LED Strip",
    price: 180,
    description: "Color-changing LED strip with remote",
    details_desc: "Flexible LED strip with vibrant color-changing options and brightness control. Comes with remote for easy customization. Ideal for decorating rooms, parties, or events. Energy-efficient and easy to install.",
    images: [require("../../assets/products/Smart_LED_Strip.jpg"), require("../../assets/products/Smart_LED_Strip.jpg")],
    specifications: [
      { label: "Length", value: "5 meters" },
      { label: "Light Colors", value: "RGB" },
      { label: "Control", value: "IR Remote" },
      { label: "Power", value: "12V DC" },
      { label: "Lifespan", value: "50,000 hours" }
    ]
  },
  {
    id: 13,
    name: "Washing Machine",
    price: 3500,
    description: "Automatic washing machine 7kg capacity",
    details_desc: "Fully automatic washing machine with 7kg capacity for medium households. Offers multiple wash programs for different fabrics. Energy- and water-efficient performance. Durable build ensures long-lasting use.",
    images: [
      require("../../assets/products/Washing_Machine_1.jpg"),
      require("../../assets/products/Washing_Machine_2.jpg"),
      require("../../assets/products/Washing_Machine_3.jpg"),
    ],
    specifications: [
      { label: "Capacity", value: "7 kg" },
      { label: "Type", value: "Fully Automatic" },
      { label: "Wash Programs", value: "8" },
      { label: "Energy Rating", value: "4 Star" },
      { label: "Spin Speed", value: "1200 RPM" }
    ]
  },
  {
    id: 14,
    name: "Microwave Oven",
    price: 2200,
    description: "20L microwave oven with grill",
    details_desc: "20-liter microwave oven with grill function for versatile cooking. Heats, grills, and defrosts with precision. Easy-to-use controls and modern design. Perfect for quick meals and snacks.",
    images: [
      require("../../assets/products/Microwave_Oven_1.jpg"),
      require("../../assets/products/Microwave_Oven_2.jpg"),
      require("../../assets/products/Microwave_Oven_3.jpg"),
    ],
    specifications: [
      { label: "Capacity", value: "20 Liters" },
      { label: "Functions", value: "Microwave, Grill, Defrost" },
      { label: "Power", value: "800W (Microwave), 1000W (Grill)" },
      { label: "Control Type", value: "Manual Knobs" },
      { label: "Turntable Size", value: "25.5 cm" }
    ]
  },
  {
    id: 15,
    name: "Electric Kettle",
    price: 150,
    description: "1.7L stainless steel electric kettle",
    details_desc: "1.7-liter electric kettle with stainless steel body for durability. Boils water quickly and efficiently. Automatic shut-off for safety. Ideal for tea, coffee, or instant meals.",
    images: [
      require("../../assets/products/Electric_Kettle_1.jpg"),
      require("../../assets/products/Electric_Kettle_2.jpg")
    ],
    specifications: [
      { label: "Capacity", value: "1.7 Liters" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Power", value: "2200W" },
      { label: "Safety", value: "Auto Shut-off, Boil-dry Protection" },
      { label: "Cord Length", value: "0.75 meters" }
    ]
  },
  {
    id: 16,
    name: "Hair Dryer",
    price: 130,
    description: "1200W compact hair dryer with cool shot",
    details_desc: "Lightweight 1200W hair dryer with multiple heat and speed settings. Cool shot function helps set hairstyles. Compact design for easy travel. Gentle on hair while delivering quick drying.",
    images: [
      require("../../assets/products/Hair_Dryer_1.jpg"),
      require("../../assets/products/Hair_Dryer_2.jpg"),
      require("../../assets/products/Hair_Dryer_3.jpg")
    ],
    specifications: [
      { label: "Power", value: "1200W" },
      { label: "Speed Settings", value: "2" },
      { label: "Heat Settings", value: "3" },
      { label: "Special Feature", value: "Cool Shot" },
      { label: "Cord Length", value: "1.8 meters" }
    ]
  },
  {
    id: 17,
    name: "Vacuum Cleaner",
    price: 900,
    description: "Bagless vacuum cleaner with 1800W motor",
    details_desc: "Bagless vacuum cleaner with powerful 1800W suction. Multi-surface cleaning for carpets, floors, and upholstery. Large dust container for less frequent emptying. Compact design for easy storage.",
    images: [require("../../assets/products/Vacuum_Cleaner.jpg"), require("../../assets/products/Vacuum_Cleaner.jpg")],
    specifications: [
      { label: "Power", value: "1800W" },
      { label: "Type", value: "Bagless" },
      { label: "Dust Capacity", value: "2 Liters" },
      { label: "Cord Length", value: "5 meters" },
      { label: "Accessories", value: "Multi-surface brush, crevice tool" }
    ]
  },
  {
    id: 18,
    name: "Electric Iron",
    price: 110,
    description: "Steam iron with non-stick soleplate",
    details_desc: "Steam iron with a smooth non-stick soleplate for effortless ironing. Adjustable temperature for various fabrics. Powerful steam output removes stubborn wrinkles. Lightweight and easy to handle.",
    images: [
      require("../../assets/products/Electric_Iron_1.jpg"),
      require("../../assets/products/Electric_Iron_2.jpg")
    ],
    specifications: [
      { label: "Soleplate", value: "Non-stick" },
      { label: "Power", value: "1200W" },
      { label: "Steam Output", value: "15 g/min" },
      { label: "Water Tank Capacity", value: "200 ml" },
      { label: "Cord Length", value: "1.8 meters" }
    ]
  },
  {
    id: 19,
    name: "Rice Cooker",
    price: 300,
    description: "Automatic rice cooker 1.8L",
    details_desc: "1.8-liter automatic rice cooker perfect for family meals. Evenly cooks rice, porridge, and more. Keep-warm function for fresh, hot rice anytime. Easy to clean and maintain.",
    images: [
      require("../../assets/products/Rice_Cooker_1.jpg"),
      require("../../assets/products/Rice_Cooker_2.jpg")
    ],
    specifications: [
      { label: "Capacity", value: "1.8 Liters" },
      { label: "Power", value: "700W" },
      { label: "Functions", value: "Cook, Keep Warm" },
      { label: "Material", value: "Non-stick Inner Pot" },
      { label: "Accessories", value: "Measuring Cup, Serving Spoon" }
    ]
  },
  {
    id: 20,
    name: "Portable Projector",
    price: 1800,
    description: "Mini projector with 1080p support",
    details_desc: "Compact mini projector supporting 1080p resolution for sharp visuals. Works with phones, laptops, and streaming devices. Perfect for home theaters or outdoor movie nights. Lightweight and portable design.",
    images: [
      require("../../assets/products/Portable_Projector_1.jpg"),
      require("../../assets/products/Portable_Projector_2.jpg"),
      require("../../assets/products/Portable_Projector_3.jpg")
    ],
    specifications: [
      { label: "Resolution", value: "1080p Supported" },
      { label: "Projection Size", value: "30-120 inches" },
      { label: "Brightness", value: "3000 Lumens" },
      { label: "Connectivity", value: "HDMI, USB, AV, Audio Out" },
      { label: "Weight", value: "1.2 kg" }
    ]
  },
  {
    id: 21,
    name: "Electric Grill",
    price: 350,
    description: "Non-stick electric grill for indoor cooking",
    details_desc: "Non-stick electric grill for healthy indoor cooking. Adjustable temperature settings for perfect results. Easy to clean after use. Ideal for grilling meat, fish, or vegetables year-round.",
    images: [
      require("../../assets/products/Electric_Grill_1.jpg"),
      require("../../assets/products/Electric_Grill_2.jpg"),
      require("../../assets/products/Electric_Grill_3.jpg")
    ],
    specifications: [
      { label: "Cooking Surface", value: "Non-stick" },
      { label: "Power", value: "1500W" },
      { label: "Temperature Control", value: "Adjustable" },
      { label: "Cooking Area", value: "40 x 25 cm" },
      { label: "Drip Tray", value: "Removable" }
    ]
  },
  {
    id: 22,
    name: "Smart Door Lock",
    price: 1500,
    description: "Fingerprint-enabled smart lock",
    details_desc: "High-security smart door lock with fingerprint recognition. Supports keyless entry via code or mobile app. Durable and weather-resistant design. Perfect for modern home security.",
    images: [
      require("../../assets/products/Smart_Door_Lock_1.jpg"),
      require("../../assets/products/Smart_Door_Lock_2.jpg"),
    ],
    specifications: [
      { label: "Unlock Methods", value: "Fingerprint, PIN Code, Mobile App, Mechanical Key" },
      { label: "Material", value: "Zinc Alloy" },
      { label: "Power Supply", value: "4 x AA Batteries" },
      { label: "Fingerprint Capacity", value: "100 fingerprints" },
      { label: "Weather Resistance", value: "IP54" }
    ]
  },
  {
    id: 23,
    name: "Laptop Stand",
    price: 100,
    description: "Adjustable ergonomic laptop stand",
    details_desc: "Ergonomic laptop stand with adjustable height and angle. Improves posture and reduces neck strain. Sturdy build supports most laptop sizes. Lightweight and foldable for portability.",
    images: [
      require("../../assets/products/Laptop_Stand_2.jpg"),
      require("../../assets/products/Laptop_Stand_1.jpg"),
    ],
    specifications: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Height Adjustment", value: "6 Levels" },
      { label: "Compatibility", value: "Fits laptops up to 17 inches" },
      { label: "Foldable", value: "Yes" },
      { label: "Weight", value: "750 g" }
    ]
  },
  {
    id: 24,
    name: "Smart TV Stick",
    price: 450,
    description: "4K streaming media player",
    details_desc: "4K streaming media stick for access to popular apps and content. Simple plug-and-play setup via HDMI. Supports voice control with virtual assistants. Compact design for easy portability.",
    images: [
      require("../../assets/products/Smart_TV_Stick_2.jpg"),
      require("../../assets/products/Smart_TV_Stick_1.jpg"),
      require("../../assets/products/Smart_TV_Stick_2.jpg"),
    ],
    specifications: [
      { label: "Resolution", value: "4K Ultra HD" },
      { label: "Connectivity", value: "Wi-Fi, Bluetooth" },
      { label: "Ports", value: "HDMI, Micro-USB" },
      { label: "Voice Control", value: "Yes, via Virtual Assistants" },
      { label: "Storage", value: "8 GB" }
    ]
  }
]

