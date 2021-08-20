import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';
import AppRightPanel from './AppRightPanel';

import { Dashboard } from './components/Dashboard';
import { FormLayoutDemo } from './components/FormLayoutDemo';
import { InputDemo } from './components/InputDemo';
import { FloatLabelDemo } from './components/FloatLabelDemo';
import { InvalidStateDemo } from './components/InvalidStateDemo';
import { ButtonDemo } from './components/ButtonDemo';
import { TableDemo } from './components/TableDemo';
import { ListDemo } from './components/ListDemo';
import { TreeDemo } from './components/TreeDemo';
import { PanelDemo } from './components/PanelDemo';
import { OverlayDemo } from './components/OverlayDemo';
import { MediaDemo } from './components/MediaDemo';
import { MenuDemo } from './components/MenuDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { FileDemo } from './components/FileDemo';
import { ChartDemo } from './components/ChartDemo';
import { MiscDemo } from './components/MiscDemo';
import { Documentation } from './components/Documentation';
import { IconsDemo } from './utilities/IconsDemo';
import { Widgets } from './utilities/Widgets';
import { GridDemo } from './utilities/GridDemo';
import { SpacingDemo } from './utilities/SpacingDemo';
import { ElevationDemo } from './utilities/ElevationDemo';
import { TextDemo } from './utilities/TextDemo';
import { TypographyDemo } from './utilities/TypographyDemo';
import { DisplayDemo } from './utilities/DisplayDemo';
import { FlexBoxDemo } from './utilities/FlexboxDemo';
import { CrudDemo } from './pages/CrudDemo';
import { CalendarDemo } from './pages/CalendarDemo';
import { TimelineDemo } from './pages/TimelineDemo';
import { Invoice } from './pages/Invoice';
import { Help } from './pages/Help';
import { EmptyPage } from './pages/EmptyPage';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import PrimeReact from 'primereact/api';
import UnityWeatherApp from './components-unity/UnityWeatherApp';
import UnityFoodApp from './components-unity/UnityFoodApp';
import UnityMoveApp from './components-unity/UnityMoveApp';
import VariablesQuiz from './components/quizzes/VariablesQuiz';
import { Panel } from 'primereact/panel';
import Code from './components/Code';
import Prism from 'prismjs';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';

const App = (props) => {

    const [resetActiveIndex, setResetActiveIndex] = useState(null)
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [sidebarStatic, setSidebarStatic] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [menuMode, setMenuMode] = useState('sidebar');
    const [configActive, setConfigActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('filled');
    const [ripple, setRipple] = useState(false);
    const [rightPanelActive, setRightPanelActive] = useState(false);
    const [colorScheme, setColorScheme] = useState('dark')
    const [topbarScheme, setTopbarScheme] = useState('light')
    const [menuScheme, setMenuScheme] = useState('light')
    const [themeScheme, setThemeScheme] = useState('light')
    const [theme, setTheme] = useState('purple');
    const [searchActive, setSearchActive] = useState(false);
    const [topbarUserMenuActive, setTopbarUserMenuActive] = useState(false)

    const menu = [
        {
            label: 'Home', icon: 'pi pi-home', to: '/'
        },
        {
            label: 'Learn', icon: 'pi pi-slack',
            items: [
                {
                    label: 'Topic 1 - Basics', icon: '',
                    items: [
                        {
                            label: 'What is programming?', icon: '',
                        },
                        {
                            label: 'Why is it needed', icon: '',
                        },
                        {
                            label: 'Languages', icon: '',
                        },
                        {
                            label: 'How does coding work?', icon: '',
                        },
                    ]
                },
                {
                    label: 'Topic 2 - Variables', icon: '',
                    items: [
                        {
                            label: 'What are variables?', icon: '',
                        },
                        {
                            label: 'Why are they important?', icon: '',
                        },
                        {
                            label: 'Types of variables', icon: '',
                        },
                    ]
                },
                {
                    label: 'Topic 3 - Data-types', icon: '',
                    items: [
                        {
                            label: 'What are datatypes?', icon: '',
                        },
                        {
                            label: 'Why are they needed?', icon: '',
                        },
                        {
                            label: 'Numerical', icon: '',
                        },
                        {
                            label: 'Text', icon: '',
                        },
                        {
                            label: 'Conditional', icon: '',
                        },
                    ]
                },
                {
                    label: 'Topic 4 - Operators', icon: '',
                    items: [
                        {
                            label: 'What are they?', icon: '',
                        },
                        {
                            label: 'Why are they needed?', icon: '',
                        },
                        {
                            label: 'Arithmetic operators', icon: '',
                        },
                        {
                            label: 'Comparison operators', icon: '',
                        },
                        {
                            label: 'Logical operators', icon: '',
                        },
                    ]
                },
                {
                    label: 'Topic 5 - Functions', icon: '',
                    items: [
                        {
                            label: 'What are they?', icon: '',
                        },
                        {
                            label: 'Why are they needed?', icon: '',
                        },
                        {
                            label: 'Reusibility', icon: '',
                        },
                        {
                            label: 'Flexibility', icon: '',
                        },
                        {
                            label: 'Organisation', icon: '',
                        },
                    ]
                },
                {
                    label: 'Topic 6 - Control flow', icon: '',
                    items: [
                        {
                            label: 'What is control flow?', icon: '',
                        },
                        {
                            label: 'Conditional control flow', icon: '',
                        },
                        {
                            label: 'Loops', icon: '',
                        },
                        {
                            label: 'Exception control', icon: '',
                        },
                    ]
                },
                {
                    label: 'Topic 7 - Data Structures', icon: '',
                    items: [
                        {
                            label: 'What is a data structure?', icon: '',
                        },
                        {
                            label: 'Arrays', icon: '',
                        },
                        {
                            label: 'Lists', icon: '',
                        },
                        {
                            label: 'Objects', icon: '',
                        },
                    ]
                },
            ]
        },
        {
            label: 'Play', icon: 'pi pi-android',
            items: [
                { label: 'Form Layout', icon: 'pi pi-id-card', to: '/uikit/formlayout' },
                { label: 'Input', icon: 'pi pi-check-square', to: '/uikit/input' },
                { label: 'Float Label', icon: 'pi pi-bookmark', to: '/uikit/floatlabel' },
                { label: 'Invalid State', icon: 'pi pi-exclamation-circle', to: '/uikit/invalidstate' },
                { label: 'Button', icon: 'pi pi-mobile', to: '/uikit/button', className: 'rotated-icon' },
                { label: 'Table', icon: 'pi pi-table', to: '/uikit/table' },
                { label: 'List', icon: 'pi pi-list', to: '/uikit/list' },
                { label: 'Tree', icon: 'pi pi-share-alt', to: '/uikit/tree' },
                { label: 'Panel', icon: 'pi pi-tablet', to: '/uikit/panel' },
                { label: 'Overlay', icon: 'pi pi-clone', to: '/uikit/overlay' },
                { label: 'Media', icon: "pi pi-image", to: '/uikit/media' },
                { label: 'Menu', icon: 'pi pi-bars', to: '/uikit/menu' },
                { label: 'Message', icon: 'pi pi-comment', to: '/uikit/message' },
                { label: 'File', icon: 'pi pi-file', to: '/uikit/file' },
                { label: 'Chart', icon: 'pi pi-chart-bar', to: '/uikit/chart' },
                { label: 'Misc', icon: 'pi pi-circle-off', to: '/uikit/misc' },
            ]
        },
        {
            label: 'Test', icon: 'pi pi-compass',
            items: [
                { label: 'Display', icon: 'pi pi-desktop', to: '/utilities/display' },
                { label: 'Elevation', icon: 'pi pi-external-link', to: '/utilities/elevation' },
                { label: 'Flexbox', icon: 'pi pi-directions', to: '/utilities/flexbox' },
                { label: 'Icons', icon: 'pi pi-search', to: '/utilities/icons' },
                { label: 'Widgets', icon: 'pi pi-star-o', to: '/utilities/widgets' },
                { label: 'Grid System', icon: 'pi pi-th-large', to: '/utilities/grid' },
                { label: 'Spacing', icon: 'pi pi-arrow-right', to: '/utilities/spacing' },
                { label: 'Typography', icon: 'pi pi-align-center', to: '/utilities/typography' },
                { label: 'Text', icon: 'pi pi-pencil', to: '/utilities/text' },
            ]
        },
        {
            label: 'Pages', icon: 'pi pi-briefcase',
            items: [
                { label: 'Crud', icon: 'pi pi-pencil', to: '/pages/crud' },
                { label: 'Calendar', icon: 'pi pi-calendar-plus', to: '/pages/calendar' },
                { label: 'Timeline', icon: 'pi pi-calendar', to: '/pages/timeline' },
                { label: 'Landing', icon: 'pi pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                { label: 'Login', icon: 'pi pi-sign-in', to: '/login' },
                { label: 'Invoice', icon: 'pi pi-dollar', to: '/pages/invoice' },
                { label: 'Help', icon: 'pi pi-question-circle', to: '/pages/help' },
                { label: 'Error', icon: 'pi pi-times-circle', to: '/error' },
                { label: 'Not Found', icon: 'pi pi-exclamation-circle', to: '/notfound' },
                { label: 'Access Denied', icon: 'pi pi-lock', to: '/access' },
                { label: 'Empty Page', icon: 'pi pi-circle-off', to: '/pages/empty' }
            ]
        },
        {
            label: 'Start', icon: 'pi pi-download',
            items: [
                { label: 'Documentation', icon: 'pi pi-question', to: '/start/documentation' },
                { label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store" } }
            ]
        }
    ];

    let menuClick;
    let rightPanelClick;
    let configClick;
    let searchClick;
    let topbarUserMenuClick;

    useEffect(() => {
        if (staticMenuMobileActive) {
            blockBodyScroll();
        }
        else {
            unblockBodyScroll();
        }
    }, [staticMenuMobileActive]);

    useEffect(() => {
        setResetActiveIndex(true)
        setMenuActive(false)
    }, [menuMode])

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            setResetActiveIndex(true)
            hideOverlayMenu();
        }
        if (!event.item.items && (isSlim() || isHorizontal())) {
            setMenuActive(false);
        }
    };

    const onMenuClick = (event) => {
        if (menuActive && event.target.className === 'layout-menu-container') {
            setResetActiveIndex(true);
            setMenuActive(false)
        }
        menuClick = true;
    }

    const onMenuModeChange = (menuMode) => {
        setMenuMode(menuMode)
        if (menuMode === 'sidebar') {
            if (sidebarStatic) {
                setSidebarActive(true)
            }
        }
        else {
            setSidebarActive(false)
            if (topbarScheme !== menuScheme) {
                setMenuScheme(topbarScheme)
            }
        }
        if (topbarScheme === 'dark') {
            setThemeScheme('dark')
        }
    };

    const onColorSchemeChange = (scheme) => {
        setColorScheme(scheme);
        props.setColorScheme(scheme)
    };

    const onThemeSchemeChange = (scheme) => {
        setThemeScheme(scheme)
        setMenuScheme(scheme)
        setTopbarScheme(scheme)
    };

    const onTopbarSchemeChange = (scheme) => {
        setTopbarScheme(scheme)
    };

    const onMenuSchemeChange = (scheme) => {
        setMenuScheme(scheme)
    };

    const onThemeChange = (themeColor) => {
        setTheme(themeColor)
    };

    const blockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        }
        else {
            document.body.className += ' blocked-scroll';
        }
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        }
        else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;
        setTopbarUserMenuActive(false);
        setRightPanelActive(false);

        if (isMobile()) {
            setStaticMenuMobileActive(prevStaticMenuMobileActive => !prevStaticMenuMobileActive);
            if (staticMenuMobileActive) {
                blockBodyScroll();
            } else {
                unblockBodyScroll();
            }
        }
        event.preventDefault();
    };

    const isMobile = () => {
        return window.innerWidth <= 991;
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const hideOverlayMenu = () => {
        setStaticMenuMobileActive(false);
        unblockBodyScroll();
    };

    const onRightPanelClick = () => {
        rightPanelClick = true;
    };

    const onRightPanelButtonClick = () => {
        setRightPanelActive((prevState) => !prevState)
        rightPanelClick = true;
    };

    const onConfigClick = () => {
        configClick = true;
    };

    const onConfigButtonClick = () => {
        setConfigActive(prevConfigActive => !prevConfigActive);
        configClick = true;
    };

    const onTopbarSearchToggle = () => {
        setSearchActive(prevState => !prevState);
        searchClick = true;
    };

    const onTopbarSearchClick = () => {
        searchClick = true
    };

    const onTopbarUserMenuClick = () => {
        setTopbarUserMenuActive(prevState => !prevState);
        topbarUserMenuClick = true;
    };

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onDocumentClick = () => {
        if (!searchClick && searchActive) {
            setSearchActive(false)
            searchClick = false;
        }

        if (!topbarUserMenuClick && topbarUserMenuActive) {
            setTopbarUserMenuActive(false)
            topbarUserMenuClick = false;
        }

        if (!rightPanelClick && rightPanelActive) {
            setRightPanelActive(false);
        }

        if (!configClick && configActive) {
            setConfigActive(false);
        }

        if (!menuClick) {
            if (isSlim() || isHorizontal()) {
                setResetActiveIndex(true)
                setMenuActive(false)
            }

            if (staticMenuMobileActive) {
                hideOverlayMenu();
            }

            unblockBodyScroll();
        }

        searchClick = false;
        topbarUserMenuClick = false;
        rightPanelClick = false;
        configClick = false;
        menuClick = false;
    };

    const onSidebarMouseOver = () => {
        setSidebarActive(!isMobile());
    };

    const onSidebarMouseLeave = () => {
        setSidebarActive(false)
    };

    const onToggleMenu = (event) => {
        menuClick = true;
        setSidebarStatic(prevState => !prevState);

        event.preventDefault();
    };

    const onRootMenuItemClick = () => {
        setMenuActive(prevMenuActive => !prevMenuActive);
    };

    const layoutClassName = classNames('layout-wrapper', {
        'layout-sidebar': menuMode === 'sidebar',
        'layout-static': menuMode === 'sidebar' && sidebarStatic,
        'layout-horizontal': menuMode === 'horizontal',
        'layout-rightpanel-active': rightPanelActive,
        'layout-slim': menuMode === 'slim',
        'layout-mobile-active': staticMenuMobileActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple
    }, 'layout-menu-' + menuScheme + ' layout-topbar-' + topbarScheme);


    return (
        <div className={layoutClassName} onClick={onDocumentClick}>

            <AppTopbar topbarScheme={topbarScheme} onRightPanelButtonClick={onRightPanelButtonClick}
                searchActive={searchActive} onTopbarSearchToggle={onTopbarSearchToggle} onTopbarSearchClick={onTopbarSearchClick}
                topbarUserMenuActive={topbarUserMenuActive} onTopbarUserMenuClick={onTopbarUserMenuClick}
                menu={menu} menuActive={menuActive} onRootMenuItemClick={onRootMenuItemClick} mobileMenuActive={staticMenuMobileActive}
                onMenuItemClick={onMenuItemClick} menuMode={menuMode}
                sidebarStatic={sidebarStatic} sidebarActive={sidebarActive} onSidebarMouseOver={onSidebarMouseOver} onSidebarMouseLeave={onSidebarMouseLeave}
                onToggleMenu={onToggleMenu} onMenuButtonClick={onMenuButtonClick} resetActiveIndex={resetActiveIndex} onMenuClick={onMenuClick} />

            <AppRightPanel onRightPanelClick={onRightPanelClick} />

            <AppConfig configActive={configActive} onConfigButtonClick={onConfigButtonClick} onConfigClick={onConfigClick}
                menuMode={menuMode} onMenuModeChange={onMenuModeChange}
                ripple={ripple} onRippleChange={onRippleChange}
                inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                colorScheme={colorScheme} onColorSchemeChange={onColorSchemeChange}
                topbarScheme={topbarScheme} onTopbarSchemeChange={onTopbarSchemeChange}
                menuScheme={menuScheme} onMenuSchemeChange={onMenuSchemeChange}
                themeScheme={themeScheme} onThemeSchemeChange={onThemeSchemeChange}
                theme={theme} onThemeChange={onThemeChange} />

            <div className="layout-main">
                <div className="layout-content">
                    
                    {/* <UnityWeatherApp /> */}
                    {/* <UnityFoodApp /> */}
                    {/* <UnityMoveApp /> */}
                    <VariablesQuiz />

                    
                    
                    {/*
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/start/documentation" component={Documentation} />
                    <Route path="/uikit/formlayout" component={FormLayoutDemo} />
                    <Route path="/uikit/floatlabel" component={FloatLabelDemo} />
                    <Route path="/uikit/input" component={InputDemo} />
                    <Route path="/uikit/invalidstate" component={InvalidStateDemo} />
                    <Route path="/uikit/button" component={ButtonDemo} />
                    <Route path="/uikit/table" component={TableDemo} />
                    <Route path="/uikit/list" component={ListDemo} />
                    <Route path="/uikit/tree" component={TreeDemo} />
                    <Route path="/uikit/panel" component={PanelDemo} />
                    <Route path="/uikit/overlay" component={OverlayDemo} />
                    <Route path="/uikit/menu" component={MenuDemo} />
                    <Route path="/uikit/message" component={MessagesDemo} />
                    <Route path="/uikit/media" component={MediaDemo} />
                    <Route path="/uikit/file" component={FileDemo} />
                    <Route path="/uikit/chart" component={ChartDemo} />
                    <Route path="/uikit/misc" component={MiscDemo} />
                    <Route path="/utilities/display" component={DisplayDemo} />
                    <Route path="/utilities/elevation" component={ElevationDemo} />
                    <Route path="/utilities/flexbox" component={FlexBoxDemo} />
                    <Route path="/utilities/icons" component={IconsDemo} />
                    <Route path="/utilities/widgets" component={Widgets} />
                    <Route path="/utilities/grid" component={GridDemo} />
                    <Route path="/utilities/spacing" component={SpacingDemo} />
                    <Route path="/utilities/typography" component={TypographyDemo} />
                    <Route path="/utilities/text" component={TextDemo} />
                    <Route path="/pages/crud" component={CrudDemo} />
                    <Route path="/pages/calendar" component={CalendarDemo} />
                    <Route path="/pages/help" render={() => <Help colorScheme={colorScheme} />} />
                    <Route path="/pages/invoice" component={Invoice} />
                    <Route path="/pages/empty" component={EmptyPage} />
                    <Route path="/pages/timeline" component={TimelineDemo} />
                    */}
                </div>

                <AppFooter />
            </div>

            <div className="layout-mask modal-in"></div>
        </div>
    );

}

export default App;
