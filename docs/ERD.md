```mermaid
erDiagram
    METALS ||--o{ ORDERS : has
    SIZES ||--o{ ORDERS : has
    STYLES ||--o{ ORDERS : has
    ORDERS }|..|{ METALS : belongs
    ORDERS }|..|{ SIZES : belongs
    ORDERS }|..|{ STYLES : belongs

    METALS {
        int id
        string name
        float pricePerOunce
    }

    SIZES {
        int id
        float carats
        float price
    }

    STYLES {
        int id
        string name
        float price
    }

    ORDERS {
        int id
        int metalId
        int sizeId
        int styleId
        datetime timestamp
    }
```

```mermaid
classDiagram
    class Metal {
        - id: int
        - name: string
        - pricePerOunce: float
    }
    class Size {
        - id: int
        - carats: float
        - price: float
    }
    class Style {
        - id: int
        - name: string
        - price: float
    }
    class Order {
        - id: int
        - metalId: int
        - sizeId: int
        - styleId: int
        - timestamp: datetime
    }
    Metal "1" --* "many" Order : has
    Size "1" --* "many" Order : has
    Style "1" --* "many" Order : has
    Order "many" -- "1" Metal : belongs
    Order "many" -- "1" Size : belongs
    Order "many" -- "1" Style : belongs