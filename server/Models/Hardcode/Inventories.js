/**
 * server/Models/hardcode/inventories.js
 */

const INVENTORIES = [
  {
    id: "in1",
    name: "Pain Reducers",
    description: "Inventory of generic drug store's inventory of pain reducers",
    viewAccess: [
      {
        id: "1",
        name: "John Smith",
      },
      {
        id: "2",
        name: "David Frost",
      },
      {
        id: "3",
        name: "Kenya Snow",
      },
    ],
    editAccess: [
      {
        id: 2,
        name: "David Frost",
      },
      {
        id: 3,
        name: "Kenya Snow",
      },
    ],
    DeleteAccess: [
      {
        id: 3,
        name: "Kenya Snow",
        email: "this.kenya@example.com",
      },
    ],
    items: [
      {
        id: "it1",
        name: "acetaminophen",
        BrandNames: Array("Panadol", "Tylenol"),
        Location: [
          {
            Section: 5,
            shelf: "A",
            box: "theta",
          },
        ],
        history: [
          {
            id: "ith1",
            accessType: "Fullfillment",
            person: "john smith",
            personID: "1",
            Date: "11/19/20",
            time: "13:01",
          },
        ],
        id: "it2",
        name: "ibuprofen",
        BrandNames: Array("advil", "motrin ib"),
        Location: [
          {
            Section: 5,
            shelf: "b",
            box: "charlie",
          },
        ],
        history: [
          {
            id: "ith2",
            accessType: "Fullfillment",
            person: "john smith",
            personID: "1",
            Date: "10/11/19",
            time: "12:01",
          },
          {
            id: "ith3",
            accessType: "Fullfillment",
            person: "john smith",
            personID: "1",
            Date: "1/21/20",
            time: "09:07",
          },
        ],
      },
    ],
  },
];
