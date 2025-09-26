import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import laptopImg from '@/assets/laptop.jpg';
import speakerImg from '@/assets/speaker.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import mouseImg from '@/assets/mouse.jpg';
import monitorImg from '@/assets/monitor.jpg';
import earbudsImg from '@/assets/earbuds.jpg';
import keyboardImg from '@/assets/keyboard.jpg';
import tabletImg from '@/assets/tablet.jpg';
import webcamImg from '@/assets/webcam.jpg';
import powerBankImg from '@/assets/powerbank.jpg';
import vrHeadsetImg from '@/assets/vr-headset.jpg';
import droneImg from '@/assets/drone.jpg';
import smartSpeakerImg from '@/assets/smart-speaker.jpg';
import wirelessChargerImg from '@/assets/wireless-charger.jpg';
import gamingChairImg from '@/assets/gaming-chair.jpg';
import cameraImg from '@/assets/camera.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    price: 24999,
    image: headphonesImg,
    description: "Premium wireless headphones with noise cancellation and 40-hour battery life",
    category: "Audio"
  },
  {
    id: 2,
    name: "Smart Watch Ultra",
    price: 33299,
    image: smartwatchImg,
    description: "Advanced fitness tracking with GPS, heart rate monitor, and 7-day battery",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Gaming Laptop X1",
    price: 107999,
    image: laptopImg,
    description: "High-performance gaming laptop with RTX 4070 graphics and 16GB RAM",
    category: "Computers"
  },
  {
    id: 4,
    name: "Bluetooth Speaker Max",
    price: 12499,
    image: speakerImg,
    description: "Portable speaker with 360-degree sound, waterproof design, and 24-hour battery",
    category: "Audio"
  },
  {
    id: 5,
    name: "Smartphone Elite",
    price: 74799,
    image: smartphoneImg,
    description: "Latest flagship smartphone with triple camera system and 5G connectivity",
    category: "Mobile"
  },
  {
    id: 6,
    name: "Wireless Mouse Pro",
    price: 6649,
    image: mouseImg,
    description: "Ergonomic wireless mouse with precision tracking and RGB lighting",
    category: "Accessories"
  },
  {
    id: 7,
    name: "4K Monitor Ultra",
    price: 49899,
    image: monitorImg,
    description: "32-inch 4K monitor with HDR10, USB-C connectivity, and 165Hz refresh rate",
    category: "Displays"
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 16649,
    image: earbudsImg,
    description: "True wireless earbuds with active noise cancellation and wireless charging",
    category: "Audio"
  },
  {
    id: 9,
    name: "Mechanical Keyboard RGB",
    price: 8299,
    image: keyboardImg,
    description: "Premium mechanical keyboard with RGB backlighting and Cherry MX switches",
    category: "Accessories"
  },
  {
    id: 10,
    name: "iPad Pro 12.9\"",
    price: 91599,
    image: tabletImg,
    description: "Professional tablet with M2 chip, 12.9-inch Liquid Retina XDR display",
    category: "Tablets"
  },
  {
    id: 11,
    name: "4K Webcam Pro",
    price: 12999,
    image: webcamImg,
    description: "Ultra HD webcam with auto-focus, noise reduction, and wide-angle lens",
    category: "Accessories"
  },
  {
    id: 12,
    name: "Power Bank 20000mAh",
    price: 2999,
    image: powerBankImg,
    description: "High-capacity power bank with fast charging and wireless charging support",
    category: "Accessories"
  },
  {
    id: 13,
    name: "VR Headset Meta Quest 3",
    price: 41599,
    image: vrHeadsetImg,
    description: "Next-gen VR headset with mixed reality and hand tracking technology",
    category: "Gaming"
  },
  {
    id: 14,
    name: "Drone 4K Professional",
    price: 87499,
    image: droneImg,
    description: "Professional drone with 4K camera, 3-axis gimbal, and 30-minute flight time",
    category: "Cameras"
  },
  {
    id: 15,
    name: "Smart Speaker Echo",
    price: 7499,
    image: smartSpeakerImg,
    description: "Voice-controlled smart speaker with premium sound and smart home integration",
    category: "Smart Home"
  },
  {
    id: 16,
    name: "Wireless Charger Stand",
    price: 3299,
    image: wirelessChargerImg,
    description: "Fast wireless charging stand with LED indicator and phone stand functionality",
    category: "Accessories"
  },
  {
    id: 17,
    name: "Gaming Chair Pro",
    price: 24999,
    image: gamingChairImg,
    description: "Ergonomic gaming chair with lumbar support, RGB lighting, and premium leather",
    category: "Gaming"
  },
  {
    id: 18,
    name: "DSLR Camera 24MP",
    price: 62499,
    image: cameraImg,
    description: "Professional DSLR camera with 24MP sensor, 4K video, and dual pixel autofocus",
    category: "Cameras"
  }
];