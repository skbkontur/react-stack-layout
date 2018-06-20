import * as React from "react";
import Helmet from "react-helmet";
import { ColumnStack, Fill, Fit, Fixed, RowStack } from "@skbkontur/react-stack-layout";
import cn from "./DocumentationEntry.less";
import { Code } from "../Code/Code";
import Link from "@skbkontur/react-ui/components/Link/Link";
import Input from "@skbkontur/react-ui/components/Input/Input";
import Button from "@skbkontur/react-ui/components/Button/Button";
import Checkbox from "@skbkontur/react-ui/components/Checkbox/Checkbox";
import Spinner from "@skbkontur/react-ui/components/Spinner/Spinner";
import Icon from "@skbkontur/react-ui/components/Icon/Icon";

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

interface HeaderProps {
    id?: string;
    children: React.ReactNode;
}

function Header2({ children, id }: HeaderProps): JSX.Element {
    if (id == undefined) {
        return <h2>{children}</h2>
    }
    return (
        <h2 id={id} className={cn("header")}>
            <div className={cn("link")}><a href={`#${id}`}><Icon name="Link" /></a></div>
            {children}
        </h2>
    )
}

function Header3({ children, id }: HeaderProps): JSX.Element {
    if (id == undefined) {
        return <h3>{children}</h3>
    }
    return (
        <h3 id={id} className={cn("header")}>
            <div className={cn("link")}><a href={`#${id}`}><Icon name="Link" /></a></div>
            {children}
        </h3>
    )
}

function Header4({ children, id }: HeaderProps): JSX.Element {
    if (id == undefined) {
        return <h4>{children}</h4>
    }
    return (
        <h4 id={id} className={cn("header")}>
            <div className={cn("link")}><a href={`#${id}`}><Icon name="Link" /></a></div>
            {children}
        </h4>
    )
}

export class DocumentationEntry extends React.Component {
    public render(): JSX.Element {
        return <div className={cn("root")}>
            <Helmet>
                <title>React Stack Layout Documentation</title>
            </Helmet>
            <h1>
                <RowStack block baseline>
                    <Fit>React Stack Layout</Fit>
                    <Fill />
                    <Fit style={{ fontSize: "16px" }} className={cn("header-link")}>
                        <Link href="https://github.com/skbkontur/react-stack-layout">
                            GitHub repo
                        </Link>
                    </Fit>
                </RowStack>
            </h1>
            <p>
                Библиотека для быстрого расположения контролов в вертикальный или горизонтальный стэки.
                По сути представляет собой <Link href="https://en.wikipedia.org/wiki/Layout_manager">layout manager</Link> из мира Desktop приложений.
            </p>

            <Header3>Оглавление</Header3>
            <ul>
                <li><Link href="#why">Обоснование</Link></li>
                <li><Link href="#idea">Идея</Link></li>
                <li><Link href="#what">Что имеем?</Link></li>
                <li><Link href="#how">Как использовать</Link></li>
                <ul>
                    <li><Link href="#install">Установка</Link></li>
                    <li><Link href="#row-stack">RowStack</Link></li>
                    <li><Link href="#column-stack">ColumnStack</Link></li>
                    <li><Link href="#shorthands">Shorthand properties</Link></li>
                </ul>
                <li><Link href="#usage">Сценарии использования</Link></li>
                <li><Link href="#bugs">Известные недостатки</Link></li>
                <li><Link href="#api">API Reference</Link></li>
            </ul>

            <Header2 id="why">Обоснование</Header2>
            <p>
                Очень часто при разработке бизнес логики нужно быстро выстроить контролы горизонтально друг за другом,
                вырывания их, например, по базовой линии, не забывая при этом, что между ними должно быть небольшое
                расстояние. Верстая такую логику много раз, появляется дублирование верстки.
            </p>
            <p>
                В этой библиотеке я обобщил самые частые сценарии расположения контролов и создал несколько удобных
                абстракций построенных поверх flexbox.
            </p>
            <p>
                Плюс ещё маленький бонус: такой код понятен любому.
            </p>

            <Header2 id="idea">Идея</Header2>
            <p>
                Предположим, требуется расположить несколько контролов определённым образом. Вместо того, чтобы делать
                добавочные стили к элементам, предлагается создать шаблон (или каркас) с placeholder-ами, внутри
                которых разместить нужные элементы.
            </p>

            <Header2 id="what">Что имеем?</Header2>

            <Header3>Корневые элементы</Header3>
            <ul>
                <li>RowStack — располагает дочерние элементы в строку.</li>
                <li>ColumnStack — располагает дочерние элементы колонкой, друг под другом.</li>
            </ul>

            <Header3>Placeholder-ы</Header3>
            <ul>
                <li>Fit — принимает размер, соотвествующий своему контенту.</li>
                <li>Fill — занимает всю доступную область.</li>
                <li>Fixed — имеет фиксированный размер.</li>
            </ul>

            <Header2 id="how">Как использовать</Header2>

            <Header3 id="install">Установка</Header3>

            <Code>{`npm install @skbkontur/react-stack-layout`}</Code>
            <p>или</p>
            <Code>{`yarn add @skbkontur/react-stack-layout`}</Code>
            <p>и подключаем</p>
            <Code>{`import { ColumnStack, RowStack, Fill, Fit, Fixed } from "@skbkontur/react-stack-layout";`}</Code>


            <Header3 id="row-stack">RowStack</Header3>

            <p>
                Располагает элементы в строку и имеет два основных свойства: <code>verticalAlign</code> и <code>gap</code>.
                Не переносит элементы на следующую строку, если не хватает доступного пространства.</p>
            <ul>
                <li>
                    <code>verticalAlign</code> принимает значения <code>top</code>, <code>bottom</code>, <code>center</code>, <code>baseline</code> или <code>stretch</code> и
                    определяет, как будет расположен placeholder по вертикали внутри котейнера.
                </li>
                <li><code>gap</code> определяет горизонтальное расстояние между placeholder-ами</li>
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
                Для того чтобы были понятны соотношения и размеры элементов:
            </p>
            <ul>
                <li>
                    <span className={cn("grey-border")}/> — серой рамкой обозначен родительский элемент, в котором
                    находится контейнер.
                </li>
                <li>
                    <span className={cn("blue-border")}/> — синей рамкой обозначен контейнер (RowStack или ColumnStack).
                </li>
                <li>
                    <span className={cn("red-border")}/> — красной рамкой обозначен placeholder (Fit, Fill или Fixed) для контента.
                </li>
            </ul>

            <p>Таким образом, базовый пример выглядит так:</p>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>

            <p>Свойство gap добавляет разрывы между элементами:</p>
            <Code>{`<RowStack verticalAlign="top" gap={4}>{/*...*/}</RowStack>`}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"top"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>

            <p>Варианты использования verticalAlign:</p>
            <Code>{`<RowStack verticalAlign="baseline" gap={4}>{/*...*/}</RowStack>`}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"baseline"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <Code>{`<RowStack verticalAlign="bottom" gap={4}>{/*...*/}</RowStack>`}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"bottom"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>
            <p>Stretch - placeholder-ы растягиваются на высоту контейнера. Но не растягивают его самого</p>
            <Code>{`<RowStack verticalAlign="stretch" gap={4}>{/*...*/}</RowStack>`}</Code>
            <p>
                <div className={cn("root-item")}>
                    <RowStack verticalAlign={"stretch"} gap={4} className={cn("container")}>
                        {rowStackItems}
                    </RowStack>
                </div>
            </p>

            <p>Center — не то же самое, что baseline :-)</p>
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

            <p>
                Заметим, что контейнер не занимает всю ширину родителя. По умолчанию RowStack использует <code>display:
                inline-flex;</code>, в большинстве случае это удобнее.
            </p>
            <p>
                Чтобы сделать контейнер блочным элементом, используйте свойство block.
            </p>
            <Code>{`<RowStack block verticalAlign="center" gap={4}>{/*...*/}</RowStack>`}</Code>
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
            <p>
                Заметим, что используется только пространство контейнера. Если убрать свойство block, то
                зелёный элемент не займёт так много места:
            </p>
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
            <p>В общем, с Fixed есть проблемы. Используйте аккуратно.</p>

            <Header3 id="column-stack">ColumnStack</Header3>
            <p>Располагает элементы в столбик и имеет два основных свойства <code>horizontalAlign</code> и <code>gap</code>.</p>
            <ul>
                <li>
                    <code>horizontalAlign</code> принимает значения <code>left</code>, <code>right</code>, <code>center</code>или <code>stretch</code> и
                    определяет, как будет расположен <strong>placeholder</strong> по горизонтали внутри котейнера.
                </li>
                <li><code>gap</code> определяет горизонтальное расстояние между placeholder-ами.</li>
            </ul>
            <p>Разберём базовый пример:</p>

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

            <p>Посмотрим варианты использования свойства horizontalAlign.</p>
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
            <p>Stretch — placeholder-ы растягиваются на ширину контейнера. Но не растягивают его самого</p>
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
            <p><strong>!!! Fixed для ColumnStack в версии 1.0.0 не применим !!!</strong></p>
            <p>
                Fill растягивается на всю доступную ширину. Нужно помнить, что доступная ширина выбирается для контейнера, а не для его родителя.
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
            <Header3 id="shorthands">Shorthand properties</Header3>
            <p>Для частых случаев verticalAlign или horizontalAlign есть простые сокращения:</p>
            <Code>{`
                <RowStack baseline />
            `}</Code>
            <p>И для ColumnStack:</p>
            <Code>{`
                <RowStack stretch />
            `}</Code>
            <Header2 id="usage">Сценарии использования</Header2>
            <p>
                Обычное расположение контролов из <Link href="https://github.com/skbkontur/retail-ui">react-ui</Link>.
            </p>
            <Header3>Пример 1. Контролы по базовой линии.</Header3>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fit><Input /></Fit>
                    <Fit><Button use="primary">Поиск</Button></Fit>
                    <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div className={cn("example-block")}>
                    <RowStack baseline block gap={2}>
                        <Fit><Input /></Fit>
                        <Fit><Button use="primary">Поиск</Button></Fit>
                        <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                    </RowStack>
                </div>
            </p>

            <Header3>Пример 2. Широкий инпут.</Header3>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fill><Input width="100%" /></Fill>
                    <Fit><Button use="primary">Поиск</Button></Fit>
                    <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div className={cn("example-block")}>
                    <RowStack baseline block gap={2}>
                        <Fill><Input width="100%" /></Fill>
                        <Fit><Button use="primary">Поиск</Button></Fit>
                        <Fit><Checkbox>Запрещённый контент</Checkbox></Fit>
                    </RowStack>
                </div>
            </p>

            <Header3>Пример 3. Ещё широкий инпут.</Header3>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fill><Input width="100%" /></Fill>
                    <Fit><Button use="primary" disabled>Поиск</Button></Fit>
                    <Fit><Spinner type={"mini"} caption="Крутилка" /></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div className={cn("example-block")}>
                    <RowStack baseline block gap={2}>
                        <Fill><Input width="100%" /></Fill>
                        <Fit><Button use="primary" disabled>Поиск</Button></Fit>
                        <Fit><Spinner type={"mini"} caption="Крутилка" /></Fit>
                    </RowStack>
                </div>
            </p>

            <Header3>Пример 3. Элементы по краям.</Header3>
            <Code>{`
                <RowStack baseline block gap={2}>
                    <Fit><Button>Button 1</Button></Fit>
                    <Fill />
                    <Fit><Button>Button 2</Button></Fit>
                    <Fit><Button>Button 3</Button></Fit>
                </RowStack>
            `}</Code>
            <p>
                <div className={cn("example-block")}>
                    <RowStack baseline block gap={2}>
                        <Fit><Button>Кнопка слева</Button></Fit>
                        <Fill />
                        <Fit><Button>Кнопка раз справа</Button></Fit>
                        <Fit><Button>Кнопка два справа</Button></Fit>
                    </RowStack>
                </div>
            </p>
            <p><Link href="mailto:tihonov.ea@gmail.com">Напишите мне</Link>, если знаете, как пополнить список примеров.</p>
            <Header2 id="bugs">Известные недостатки</Header2>
            <ul>
                <li>Иногда, да что там, часто, возникают лишние DOM-элементы (я готов заплатить за унификацию и ясность кода).</li>
                <li>есть несколько багов (help wanted!).</li>
                <li>Проблемы с вертикальным Fill. Пользоваться им иногда не очень удобно.</li>
                <li>Fixed не работает с ColumnStack.</li>
            </ul>

            <Header2 id="api">API Reference</Header2>

            <Header3>{`<RowStack />`}</Header3>
            <p>Контейнерынй элемент, внутри которого непосредственными детьми должны располагаться placeholder-ы (Fit, Fixed или Fill). Располагает элементы горизонтально.</p>
            <Header4>Props</Header4>
            <ul>
                <li>
                    <code>verticalAlign?: "top" | "bottom" | "center" | "baseline" | "stretch";</code>
                    <p>(default = "top") Определяет вертикальное положение placeholder-ов внутри контейнера</p>
                </li>
                <li>
                    <code>baseline?: boolean;</code>
                    <p>Сокращение для verticalAlign="baseline". Если значение verticalAlign задано, будет сгенерировано исключение.</p>
                </li>
                <li>
                    <code>block?: boolean;</code>
                    <p>Меняет display элемента на flex. По умочанию контейнер inline-flex.</p>
                </li>
                <li>
                    <code>inline?: boolean;</code>
                    <p>Меняет display элемента на inline-flex.</p>
                </li>
                <li>
                    <code>gap?: number;</code>
                    <p>Задаёт разрыв между элементами в условных единицах. gap={1} - разрыв в 5px.</p>
                </li>
            </ul>

            <Header3>{`<ColumnStack />`}</Header3>
            <p>Контейнерынй элемент, внутри которого непосредственными детьми должны располагаться placeholder-ы (Fit или Fill). Располагает элементы столбцом.</p>
            <ul>
                <li>
                    <code>horizontalAlign?: "left" | "right" | "center" | "stretch";</code>
                    <p>(default = "left") Определяет горизонтальное положение placeholder-ов внутри контейнера</p>
                </li>
                <li>
                    <code>stretch?: boolean;</code>
                    <p>Сокращение для horizontalAlign="stretch". Если значение horizontalAlign задано, будет сгенерировано исключение.</p>
                </li>
                <li>
                    <code>block?: boolean;</code>
                    <p>Меняет display элемента на flex. По умочанию контейнер inline-flex.</p>
                </li>
                <li>
                    <code>inline?: boolean;</code>
                    <p>Меняет display элемента на inline-flex.</p>
                </li>
                <li>
                    <code>gap?: number;</code>
                    <p>Задаёт разрыв между элементами в условных единицах. gap={1} - разрыв в 5px.</p>
                </li>
            </ul>


            <Header3>{`<Fit />`}</Header3>
            <p>Элемент-placeholder. Занимает пространство соответсвующее своему контенту</p>

            <Header3>{`<Fill />`}</Header3>
            <p>Элемент-placeholder. Занимает все доступное пространство контейнера.</p>

            <Header3>{`<Fixed />`}</Header3>
            <p>Элемент-placeholder. Занимает заданный размер. Применим только внутри RowStack.</p>
            <ul>
                <li><code>width: number;</code></li>
                <p>Обязательный параметр. Соответствует ширине занимаемой в контейнере.</p>
            </ul>
        </div>;
    }
}

