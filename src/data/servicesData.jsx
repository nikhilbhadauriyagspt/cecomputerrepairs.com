import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  HardDrive, 
  Cpu, 
  Battery, 
  Keyboard, 
  Wind, 
  Thermometer, 
  Search,
  CheckCircle2,
  Clock,
  Wrench,
  ClipboardCheck
} from 'lucide-react';

export const servicesData = [
  {
    id: 'laptop-desktop-repair',
    title: 'Laptop & Desktop Repair',
    shortDesc: 'Comprehensive repair solutions for performance issues, startup failures, and hardware faults.',
    icon: <Monitor />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    description: 'We handle general computer repair and laptop repair for systems that are not functioning as expected. This includes devices that fail to start, show errors during use, or perform inconsistently.',
    cases: [
      'System not powering on',
      'Unexpected shutdowns',
      'Performance instability',
      'Hardware-related faults'
    ]
  },
  {
    id: 'screen-replacement',
    title: 'Screen Replacement & Display Repair',
    shortDesc: 'Replacement of cracked, flickering, or non-functional laptop screens using compatible parts.',
    icon: <Smartphone />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    description: 'We provide laptop screen replacement for devices with cracked, damaged, or non-working displays. Display issues can affect usability significantly and often require part replacement.',
    cases: [
      'Cracked or broken screens',
      'Flickering or dim display',
      'No display output'
    ]
  },
  {
    id: 'hard-drive-repair',
    title: 'Hard Drive Repair & Storage Issues',
    shortDesc: 'Diagnosis of storage-related problems including system crashes, slow performance, and drive failures.',
    icon: <HardDrive />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    description: 'Storage problems can lead to slow systems, data access issues, or complete failure. Our hard drive repair and diagnostics focus on identifying whether the issue is repairable or requires replacement.',
    cases: [
      'Slow system performance',
      'Drive not detected',
      'Data access errors'
    ]
  },
  {
    id: 'motherboard-repair',
    title: 'Motherboard Repair',
    shortDesc: 'Inspection and repair of motherboard-related issues affecting power, display, or system stability.',
    icon: <Cpu />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    description: 'The motherboard connects all major components of a device. We provide motherboard-level inspection and repair for issues affecting power, display, or internal communication between components.',
    cases: [
      'No power or boot failure',
      'Peripheral components not responding',
      'Internal hardware faults'
    ]
  },
  {
    id: 'battery-power-issues',
    title: 'Battery Replacement & Power Issues',
    shortDesc: 'Battery replacement and troubleshooting of charging-related problems.',
    icon: <Battery />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    description: 'We address battery and charging-related problems in laptops. If your device does not hold charge or fails to power correctly, it may require battery replacement or internal inspection.',
    cases: [
      'Battery draining quickly',
      'Device not charging',
      'Charging port-related concerns'
    ]
  },
  {
    id: 'keyboard-repair',
    title: 'Keyboard Repair & Replacement',
    shortDesc: 'Repair or replacement of non-responsive or damaged keyboards.',
    icon: <Keyboard />,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    description: 'We offer keyboard replacement services for laptops with non-functional or damaged keys.',
    cases: [
      'Unresponsive keys',
      'Physical damage',
      'Input inconsistency'
    ]
  },
  {
    id: 'fan-replacement',
    title: 'Fan Replacement & Cooling System Repair',
    shortDesc: 'Fan replacement and cleaning to address overheating and airflow issues.',
    icon: <Wind />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    description: 'Overheating is often caused by cooling system failure. We provide fan replacement and internal cleaning to restore proper airflow and temperature control.',
    cases: [
      'Excessive heat',
      'Loud fan noise',
      'System slowdown due to temperature'
    ]
  },
  {
    id: 'thermal-paste-replacement',
    title: 'Thermal Paste Replacement',
    shortDesc: 'Improving heat transfer for better system cooling and performance.',
    icon: <Thermometer />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    description: 'Thermal paste helps regulate CPU temperature. Over time, it can degrade and reduce cooling efficiency. We provide thermal paste replacement to improve heat transfer and system stability.',
    cases: []
  },
  {
    id: 'diagnostics',
    title: 'Computer & Laptop Diagnostics (Free Diagnosis)',
    shortDesc: 'Initial inspection to identify the issue before proceeding with repair.',
    icon: <Search />,
    color: 'text-zinc-600',
    bg: 'bg-zinc-50',
    description: 'We begin every repair with a device diagnosis to identify the root cause of the issue. This allows for a more accurate and efficient repair process.',
    cases: [
      'Identifying faulty components',
      'Understanding repair scope',
      'Avoiding unnecessary replacements'
    ]
  }
];

export const processSteps = [
  {
    title: 'Book a Service or Visit',
    desc: 'You can begin by submitting a service request or visiting our location for inspection.',
    icon: <Clock />,
    details: [
      'Device type (laptop or desktop)',
      'Description of the issue',
      'Any visible damage or recent changes'
    ]
  },
  {
    title: 'Device Inspection & Diagnosis',
    desc: 'Once the device is received, we perform a hardware inspection to identify the root cause of the problem.',
    icon: <Search />,
    details: [
      'Display and screen condition',
      'Storage devices (hard drive or SSD)',
      'Battery and power system',
      'Cooling system and fan',
      'Motherboard and internal connections'
    ]
  },
  {
    title: 'Issue Explanation',
    desc: 'After diagnosis, the identified issue is explained in clear and simple terms.',
    icon: <ClipboardCheck />,
    details: [
      'What is causing the problem',
      'Whether repair or replacement is required',
      'The general scope of the work involved'
    ]
  },
  {
    title: 'Repair or Component Replacement',
    desc: 'Based on the diagnosis, the required computer repair or laptop repair service is carried out.',
    icon: <Wrench />,
    details: [
      'Screen replacement',
      'Hard drive repair or replacement',
      'Battery or keyboard replacement',
      'Fan repair or cooling system work',
      'Motherboard-level repair (if applicable)'
    ]
  },
  {
    title: 'Testing & Quality Check',
    desc: 'After the repair is completed, the device goes through a testing phase to ensure proper functionality.',
    icon: <CheckCircle2 />,
    details: [
      'Power and startup testing',
      'Display and input checks',
      'Performance and stability verification',
      'Cooling and temperature monitoring'
    ]
  },
  {
    title: 'Device Handover',
    desc: 'Once testing is complete, the device is ready for pickup.',
    icon: <CheckCircle2 />,
    details: [
      'You can review the device condition',
      'Basic information about the repair may be shared',
      'Any important usage notes are explained'
    ]
  }
];

export const commonIssues = [
  'Broken or damaged laptop screens',
  'Slow or unresponsive systems',
  'Hard drive failures and storage errors',
  'Overheating and fan noise',
  'Battery not charging or draining quickly',
  'Keyboard or input issues',
  'Power-related problems'
];
