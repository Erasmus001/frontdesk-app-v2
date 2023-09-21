type DataProp = {
  readonly id: string | number;
  fullname: string;
  email: string;
  phoneNumber: number | string;
  purpose: "Official" | "Enquiry" | "Personal" | "Event" | "Complaint" | "Investments";
  status: "Ongoing" | "Ended";
};

export const VisitorsTableData: DataProp[] = [
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Official",
    status: "Ongoing",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Kelvin Akwettey",
    email: "kely@example.com",
    phoneNumber: "0201924571",
    purpose: "Event",
    status: "Ended",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Enquiry",
    status: "Ended",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Official",
    status: "Ongoing",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Official",
    status: "Ongoing",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Complaint",
    status: "Ended",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Personal",
    status: "Ongoing",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Personal",
    status: "Ended",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Enquiry",
    status: "Ongoing",
  },
  {
    id: crypto.randomUUID(),
    fullname: "Erasmus Mensah",
    email: "eras@example.com",
    phoneNumber: "0201924571",
    purpose: "Event",
    status: "Ongoing",
  },
];
