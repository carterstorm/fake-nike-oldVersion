import { useState } from "react";
import { merchData } from "./merchData";
import {
    Category,
    Heading,
    Wrapper,
    List,
    Item,
    Link,
} from "./styled";

export const MerchMenu = () => {
    const [visible, setVisible] = useState(false);

    const changeVisibility = () => {
        setVisible(visible => !visible);
    };

    return (

        <Wrapper
            onMouseEnter={changeVisibility}
            onMouseLeave={changeVisibility}
        >
            {merchData.map(({ id, name, elements }) => (
                <Category key={id}>
                    <Heading>{name}</Heading>
                    <List
                        visible={visible}
                    >
                        {elements.map((item, index) => (
                            <Item
                                visible={visible}
                                key={index}>
                                <Link
                                    visible={visible}
                                    href="#">
                                    {item}
                                </Link>
                            </Item>
                        ))}
                    </List>
                </Category>
            ))}
        </Wrapper>
    )
};