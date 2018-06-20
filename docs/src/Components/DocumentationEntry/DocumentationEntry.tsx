import * as React from "react";
import Helmet from "react-helmet";
import { ColumnStack, Fill, Fit, Fixed, RowStack } from "@skbkontur/react-stack-layout";
import "../../Styles/Reset.less";
import "../../Styles/Typography.less";
import cn from "./DocumentationEntry.less";
import { Code } from "../Code/Code";
import Link from "@skbkontur/react-ui/components/Link/Link";
import Input from "@skbkontur/react-ui/components/Input/Input";
import Button from "@skbkontur/react-ui/components/Button/Button";
import Checkbox from "@skbkontur/react-ui/components/Checkbox/Checkbox";
import Spinner from "@skbkontur/react-ui/components/Spinner/Spinner";

const rowStackItems = [
    <Fit key={"1"} className={cn("item")}>
        <div className={cn("item-1")}>{"<Fit />"}</div>
    </Fit>,
    <Fit key={"2"} className={cn("item")}>
        <div className={cn("item-2")}>{"<Fit />"}</div>
    </Fit>,
    <Fit key={"3"} className={cn("item")}>
        <div className={cn("item-3")}>{"<Fit />"}</div>
    </Fit>,
];

const items = [
    <Fit key={"1"} className={cn("item")}>
        <div className={cn("item-1")}>{"<Fit />"}</div>
    </Fit>,
    <Fit key={"2"} className={cn("item")}>
        <div className={cn("item-2")}>{"<Fit />"}</div>
    </Fit>,
    <Fit key={"3"} className={cn("item")}>
        <div className={cn("item-3")}>{"<Fit />"}</div>
    </Fit>,
];

export class DocumentationEntry extends React.Component {
    public render(): JSX.Element {
        return <div className={cn("root")}>
            <Helmet>
                <title>React Stack Layout Docs</title>
            </Helmet>
            <h1>React Stack Layout</h1>
            <p>
                Библиотека для быстрого расположения контролов в вертикальный или горизотальный стэки.
                По сути представляет собой <Link href="https://en.wikipedia.org/wiki/Layout_manager">layout manager</Link> из мира Desktop приложений.
            </p>

            <h2>Обоснование</h2>
            <p>
                Очень часто при разработке бизнес логики нужно быстро выстроить контролы горизотально друг за другом,
                выравния их, например, по базовой линии, не забывая при этом, что между ними должно быть небольшое
                расстояние.
                Верстая такую логику много раз, появляется дублирование верстки.
            </p>
            <p>
                В этой библиотеке я обобщил самые частые сценарии распложения контролов и создал несколько удобных
                абстракций построенных поверх flex'а.
            </p>
            <p>
                Плюс ещё маленький бонус: такой код понятен любому.
            </p>

            <h2>Идея</h2>
            <p>
                Предположим требуется расположить несколько контролов определённым образом. Вместо того,
                чтобы делать добавочные стили к элментам, предлагнается создать шаблон (или каркас) с
                placeholder-ами внутрь которых расместить нужные элементы.
            </p>

            <h2>Что имеем?</h2>

            <h3>Корневые элементы</h3>
            <ul>
                <li>RowStack - разполагает дочерние элементы в строку</li>
                <li>ColumnStack - разполагает дочерние элементы колонкой, друг под другом</li>
            </ul>

            <h3>Placeholder-ы</h3>
            <ul>
                <li>Fit - принимает размер, соотв. своему контентуs</li>
                <li>Fill - занимает всю доступную область</li>
                <li>Fixed - имеет фиксированные размер</li>
            </ul>

            <h2>Как использовать</h2>
            <h3>Установка</h3>
            <Code>{`npm install @skbkontur/react-stack-layout`}</Code>
            <p>или</p>
            <Code>{`yarn add @skbkontur/react-stack-layout`}</Code>
            <p>и подключаем</p>
            <Code>{`import { ColumnStack, RowStack, Fill, Fit, Fixed } from "@skbkontur/react-stack-layout";`}</Code>
            <h3>RowStack</h3>
            <p>Располагает элементы в строку и имеет два основных свойства verticalAlign и gap. Не переносил элементы на следующую строку, если не хватает доступнго пространства.</p>
            <ul>
                <li>verticalAlign принимает значения `top`, `bottom`, `center`, `baseline` или `stretch` и определяет,
                    как будет расположен **placeholder** по вертикали внутри котейнера.
                </li>
                <li>gap определяет горизонтальное расстояние между placeholder-ами</li>
            </ul>

            <p>Разберём базовый пример</p>

            <Code>{`
                <RowStack verticalAlign="top">
                    <Fit>
                        <YellowItem />
                    </Fit>
                    <Fit>
                        <GreenItem />
                    </Fit>
                    <Fit>
                        <BlueItem />
                    </Fit>
                </RowStack>
            `}
            </Code>
            <p>
                <div>
                    <RowStack verticalAlign={"top"}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <p>
                Для того чтобы было понятны соотношения и размеры элментов:
            </p>
            <ul>
                <li>
                    <span className={cn("grey-border")}/> -- серой рамкой обозначен родительский элемент, в котором
                    находить контейнер
                </li>
                <li>
                    <span className={cn("blue-border")}/> -- красной рамкой обозначен контейнер
                </li>
                <li>
                    <span className={cn("red-border")}/> -- красной рамкой обозначен placeholder для контента
                </li>
            </ul>
            <p>Таким образом, базоый пример выглядит так:</p>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <p>Свойство gap добавляет разрывы между элментами. </p>
            <Code>{`
                <RowStack verticalAlign="top" gap={4}>{/*...*/}</RowStack>
            `}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <p>Варианты использования verticalAlign:</p>
            <Code>{`
                <RowStack verticalAlign="baseline" gap={4}>{/*...*/}</RowStack>
            `}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"baseline"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <Code>{`
                <RowStack verticalAlign="bottom" gap={4}>{/*...*/}</RowStack>
            `}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"bottom"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <p>Stretch - placeholder-ы растягиваются на высоту контейнера. Но не растягивают его самого</p>
            <Code>{`
                <RowStack verticalAlign="stretch" gap={4}>{/*...*/}</RowStack>
            `}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"stretch"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>

            <p>Center -- не то же самое, что baseline :-)</p>
            <Code>{`
                <RowStack verticalAlign="center" gap={4}>{/*...*/}</RowStack>
            `}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"center"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>

            <p>Заметим, что контейнер не занимает всю ширину родителя. По умочанию RowStack использует <code>display:
                inline-flex;</code>, в большистве случае это удобнее.</p>
            <p>Чтобы задать контейнеру блочный стиль, ипользуйте свойство block</p>
            <Code>{`
                <RowStack block verticalAlign="center" gap={4}>{/*...*/}</RowStack>
            `}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack block verticalAlign={"center"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>

            <p>Fill растягивается на всю доступную шириную.</p>
            <Code>{`
                <RowStack block verticalAlign="top">
                    <Fit><YellowItem /></Fit>
                    <Fill><GreenItem /></Fill>
                    <Fit><BlueItem /></Fit>
                </RowStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack block verticalAlign={"top"} className={cn("container")}>
                        <Fit className={cn("item")}>
                            <div className={cn("item-1")}>Item 1</div>
                        </Fit>
                        <Fill className={cn("item")}>
                            <div className={cn("item-2")}>Item 2</div>
                        </Fill>
                        <Fit className={cn("item")}>
                            <div className={cn("item-3")}>Item 3</div>
                        </Fit>
                    </RowStack>
                </div>
            </p>
            <p>Заметим, что используется только простраство контейнера. Если убрать свойство block, то зелёный элемент
                не займёт так много места:</p>
            <Code>{`
                <RowStack verticalAlign="top">
                    <Fit><YellowItem /></Fit>
                    <Fill><GreenItem /></Fill>
                    <Fit><BlueItem /></Fit>
                </RowStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} className={cn("container")}>
                        <Fit className={cn("item")}>
                            <div className={cn("item-1")}>Item 1</div>
                        </Fit>
                        <Fill className={cn("item")}>
                            <div className={cn("item-2")}>Item 2</div>
                        </Fill>
                        <Fit className={cn("item")}>
                            <div className={cn("item-3")}>Item 3</div>
                        </Fit>
                    </RowStack>
                </div>
            </p>
            <p>Fixed задаёт placeholder-у фиксированную ширину.</p>
            <Code>{`
                <RowStack verticalAlign="top">
                    <Fit><YellowItem /></Fit>
                    <Fixed width={200}><GreenItem /></Fixed>
                    <Fit><BlueItem /></Fit>
                </RowStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} className={cn("container")}>
                        <Fit className={cn("item")}>
                            <div className={cn("item-1")}>Item 1</div>
                        </Fit>
                        <Fixed className={cn("item")} width={200}>
                            <div className={cn("item-2-inline-block")}>Item 2</div>
                        </Fixed>
                        <Fit className={cn("item")}>
                            <div className={cn("item-3")}>Item 3</div>
                        </Fit>
                    </RowStack>
                </div>
            </p>
            <p>Если места в placeholder-е не хватает:</p>
            <Code>{`
                <RowStack verticalAlign="top">
                    <Fit><YellowItem /></Fit>
                    <Fixed width={70}><GreenItem /></Fixed>
                    <Fit><BlueItem /></Fit>
                </RowStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} className={cn("container")}>
                        <Fit className={cn("item")}>
                            <div className={cn("item-1")}>Item 1</div>
                        </Fit>
                        <Fixed className={cn("item")} width={70}>
                            <div className={cn("item-2-inline-block")}>Item2</div>
                        </Fixed>
                        <Fit className={cn("item")}>
                            <div className={cn("item-3")}>Item 3</div>
                        </Fit>
                    </RowStack>
                </div>
            </p>
            <p>И если места контейнере не хватает:</p>
            <Code>{`
                <RowStack verticalAlign="top">
                    <Fit><YellowItem /></Fit>
                    <Fixed width={400}><GreenItem /></Fixed>
                    <Fit><BlueItem /></Fit>
                </RowStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} className={cn("container")}>
                        <Fit className={cn("item")}>
                            <div className={cn("item-1")}>Item 1</div>
                        </Fit>
                        <Fixed className={cn("item")} width={400}>
                            <div className={cn("item-2-inline-block")}>Item2</div>
                        </Fixed>
                        <Fit className={cn("item")}>
                            <div className={cn("item-3")}>Item 3</div>
                        </Fit>
                    </RowStack>
                </div>
            </p>
            <p>В общем с Fixed, есть проблемы. Используйте аккуратно.</p>

            <h3>ColumnStack</h3>
            <p>Располагает элементы в столбик и имеет два основных свойства horizontalAlign и gap.</p>
            <ul>
                <li>horizontalAlign принимает значения "left", "right", "center" или "stretch" и определяет,
                    как будет расположен **placeholder** по вертикали внутри котейнера.
                </li>
                <li>gap определяет горизонтальное расстояние между placeholder-ами.</li>
            </ul>
            <p>Разберём базовый пример</p>

            <Code>{`
                <ColumnStack horizontalAlign="left" gap={5}>
                    <Fit><YellowItem /></Fit>
                    <Fit><GreenItem /></Fit>
                    <Fit><BlueItem /></Fit>
                </ColumnStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item-h")}>
                    <ColumnStack horizontalAlign={"left"} gap={4} className={cn("container")}>
                        {items}
                    </ColumnStack>
                </div>
            </p>
            <p>Посмотрим варинты использования свойства horizontalAlign</p>
            <Code>{`
                <ColumnStack horizontalAlign="center" gap={5}>{/*...*/}</ColumnStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item-h")}>
                    <ColumnStack horizontalAlign="center" gap={4} className={cn("container")}>
                        {items}
                    </ColumnStack>
                </div>
            </p>
            <Code>{`
                <ColumnStack horizontalAlign="right" gap={5}>{/*...*/}</ColumnStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item-h")}>
                    <ColumnStack horizontalAlign="right" gap={4} className={cn("container")}>
                        {items}
                    </ColumnStack>
                </div>
            </p>
            <p>Stretch - placeholder-ы растягиваются на нирину контейнера. Но не растягивают его самого</p>
            <Code>{`
                <ColumnStack horizontalAlign="stretch" gap={5}>{/*...*/}</ColumnStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item-h")}>
                    <ColumnStack horizontalAlign="stretch" gap={4} className={cn("container")}>
                        {items}
                    </ColumnStack>
                </div>
            </p>
            <p>Не забываем про свойство block, которое делает элемент блочным:</p>
            <Code>{`
                <ColumnStack block horizontalAlign="stretch" gap={5}>{/*...*/}</ColumnStack>
            `}
            </Code>
            <p>
                <div className={cn("root-item-h")}>
                    <ColumnStack block horizontalAlign="stretch" gap={4} className={cn("container")}>
                        {items}
                    </ColumnStack>
                </div>
            </p>
            <p>Fixed для ColumnStack в версии 1.0.0 не применим!!!</p>
            <p>
                Fill растягивается на всю доступную шириную. Нужно помнить, что доступная ширина, выбирается для контейнера, а не для его родителя.
                В следующем примере зелёный элемент на растянул контейнер по высоте родителя.
            </p>
            <Code>{`
                <ColumnStack horizontalAlign="left" gap={5}>
                    <Fit><YellowItem /></Fit>
                    <Fill><GreenItem /></Fill>
                    <Fit><BlueItem /></Fit>
                </ColumnStack>
            `}
            </Code>
            <div className={cn("root-item-h")}>
                <ColumnStack horizontalAlign={"left"} className={cn("container")}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fill className={cn("item")}>
                        <div className={cn("item-2")}>Item 2</div>
                    </Fill>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </ColumnStack>
            </div>
            <p>Чтобы всё сработало, нужно сделать контейнер высотой с родителя:</p>
            <Code>{`
                <ColumnStack horizontalAlign="left" gap={5} style={{ height: "100%" }}>
                    <Fit><YellowItem /></Fit>
                    <Fill><GreenItem /></Fill>
                    <Fit><BlueItem /></Fit>
                </ColumnStack>
            `}
            </Code>
            <div className={cn("root-item-h")}>
                <ColumnStack horizontalAlign={"left"} className={cn("container")} style={{ height: "100%" }}>
                    <Fit className={cn("item")}>
                        <div className={cn("item-1")}>Item 1</div>
                    </Fit>
                    <Fill className={cn("item")}>
                        <div className={cn("item-2")}>Item 2</div>
                    </Fill>
                    <Fit className={cn("item")}>
                        <div className={cn("item-3")}>Item 3</div>
                    </Fit>
                </ColumnStack>
            </div>
            <h3>Shorthand properties</h3>
            <p>Чтобы всё время не писать verticalAlign или horizontalAlign есть простые сокращения:</p>
            <Code>{`
                <RowStack baseline />
                <RowStack top />
                <RowStack bottom />
                <RowStack stetch />
                <RowStack center />
            `}</Code>
            <p>И для ColumnStack:</p>
            <Code>{`
                <RowStack left />
                <RowStack right />
                <RowStack stetch />
                <RowStack center />
            `}</Code>
            <h2>Сценарии использования</h2>
            <p>
                Обычное расположение контров из react-ui.
            </p>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fit><Input /></Fit>
                    <Fit><Button use="primary">Поиск</Button></Fit>
                    <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div>
                    <RowStack baseline block gap={2}>
                        <Fit><Input /></Fit>
                        <Fit><Button use="primary">Поиск</Button></Fit>
                        <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                    </RowStack>
                </div>
            </p>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fill><Input width="100%" /></Fill>
                    <Fit><Button use="primary">Поиск</Button></Fit>
                    <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div>
                    <RowStack baseline block gap={2}>
                        <Fill><Input width="100%" /></Fill>
                        <Fit><Button use="primary">Поиск</Button></Fit>
                        <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                    </RowStack>
                </div>
            </p>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fill><Input width="100%" /></Fill>
                    <Fit><Button use="primary" disabled>Поиск</Button></Fit>
                    <Fit><Spinner type={"mini"} caption="Крутилка" /></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div>
                    <RowStack baseline block gap={2}>
                        <Fill><Input width="100%" /></Fill>
                        <Fit><Button use="primary" disabled>Поиск</Button></Fit>
                        <Fit><Spinner type={"mini"} caption="Крутилка" /></Fit>
                    </RowStack>
                </div>
            </p>
            <p>Напишите мне если знаете как пополнить списко примеров.</p>
            <h2>Известные недостатки</h2>
            <ul>
                <li>иногда возникает лишнии DOM-элементы (я готов заплатить, за унификацию и ясность кода)</li>
                <li>есть несколько багов (help wanted!)</li>
                <li>Проблемы с вертикальным Fill. Пользоваться им иногда не очень удобно.</li>
                <li>Fixed не работает с ColumnStack</li>
            </ul>
        </div>;
    }
}

