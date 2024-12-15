import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Computer Vision Surveillance System for Jababeka',
        description: "A cutting-edge computer vision system designed to enhance surveillance capabilities in Jababeka. This system focuses on detecting and analyzing various fraudulent activities in real-time, improving security and operational efficiency.",
        tools: ['OpenCV', 'YOLO', 'Intel Geti', 'Python', 'MinIO', 'Pentaho'],
        role: 'Computer Vision Lead and Project Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Computer Vision Surveillance for JPO Jakarta',
        description: 'An advanced computer vision system aimed at enhancing public safety by monitoring pedestrian bridges for signs of potential suicide attempts. The system leverages AI to detect unusual behaviors, provide early warnings, and enable rapid intervention to prevent tragedies.',
        tools: ['OpenCV', 'Intel Geti', 'Python', 'MinIO'],
        role: 'Computer Vision Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Video Management System',
        description: 'A flexible and scalable Video Management System (VMS) designed to integrate with RTSP camera streams from any brand. This system provides centralized video monitoring, recording, and analysis, ensuring seamless management of video surveillance networks.',
        tools: ['Express JS', 'React JS', 'PM2', 'PostgreSQL', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Mbravo Mobile APP',
        description: "A mobile application designed to streamline the data collection process for documenting fiber optic network additions. The app enables field technicians to efficiently record, organize, and share network expansion data, ensuring accuracy and improving operational workflows.",
        tools: ['React Native'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Mobile Developer',
    },
    {
        id: 5,
        name: 'IoT-Integrated Attendance Data Collection Website',
        description: "A web-based application designed to collect and manage attendance data through IoT devices. The system automates attendance tracking, integrates seamlessly with IoT devices such as biometric scanners or RFID readers, and provides real-time reporting and analytics for streamlined workforce management.",
        tools: ['Laravel', 'ZKTeco'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Back-End Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },