
export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string"
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string"
        },
        {
            name: "adress",
            title: "Adress",
            type: "string"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string"
        },
        {
            name: "Phone",
            title: "Phone",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "discount",
            title: "Discount",
            type: "number"
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [{type:"reference", to: {type:"products"}}]
        },
        {
            name: "total",
            title: "Total",
            type: "number"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options:{
                list: [
                    {title:"pending", value: "pending"},
                    {title:"Success", value: "success"},
                    {title:"Dispatch", value: "dispatch"}

                ],
                layout: "radio"
        },
        initialValue:"pending"
        }

    ]

}