import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Ripple } from 'primereact/ripple';

const AppSubmenu = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onMenuItemClick = (event, item, index) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        
        //execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
            event.preventDefault();
        }

        if (item.items) {
            event.preventDefault();
        }

        if (props.root) {
            props.onRootMenuItemClick({
                originalEvent: event,
            });
        }

        else {
            if (props.menuMode !== 'sidebar') {
                const ink = getInk(event.currentTarget);
                if (ink) {
                    removeClass(ink, 'p-ink-active');
                }
            }
        }

        setActiveIndex(index === activeIndex ? null : index);

        props.onMenuItemClick({
            originalEvent: event,
            item: item
        });
    };

    const onKeyDown = (event, item, index) => {
        if (event.key === 'Enter') {
            onMenuItemClick(event, item, index);
        }
    }

    const getInk = (el) => {
        for (let i = 0; i < el.children.length; i++) {
            if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
                return el.children[i];
            }
        }
        return null;
    };

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };

    const onMenuItemMouseEnter = (index) => {
        if (props.root && props.menuActive && isHorizontalOrSlim() && !isMobile()) {
            setActiveIndex(index);
        }
    };

    const isMobile = () => {
        return window.innerWidth <= 1025;
    };

    const isHorizontalOrSlim = useCallback(() => {
        return (props.menuMode === 'horizontal' || props.menuMode === 'slim');
    }, [props.menuMode]);
    

    const visible = (item) => {
        return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    };

    const getLink = (item, index) => {
        const menuitemIconClassName = classNames('layout-menuitem-icon', item.icon);
        const content = (
            <>
                <i className={menuitemIconClassName}></i>
                <span className="layout-menuitem-text">{item.label}</span>
                { item.items && <i className="pi pi-fw pi-chevron-down  layout-submenu-toggler"></i>}
                <Ripple />
            </>
        );
        const commonLinkProps = {
            'style': item.style,
            'className': classNames(item.className, 'p-ripple', { 'p-disabled': item.disabled }),
            'target': item.target,
            'onClick': (e) => onMenuItemClick(e, item, index),
            'onMouseEnter': () => onMenuItemMouseEnter(index),
            'onKeyDown': (e) => onKeyDown(e, item, index)
        }

        if (item.to) {
            return <NavLink to={item.to} exact activeClassName="active-route" {...commonLinkProps}>{content}</NavLink>;
        }
        else {
            return <a href={item.url} rel="noopener noreferrer" tabIndex={item.url ? '' : 0} {...commonLinkProps}>{content}</a>
        }
    };

    const getItems = () => {
        const transitionTimeout = isHorizontalOrSlim() && !props.root ? { enter: 1000, exit: 450} : (isHorizontalOrSlim() && !isMobile() ? 0 : { enter: 1000, exit: 450 });
        return props.items.map((item, i) => {
            if (visible(item)) {
                const menuitemClassName = classNames({ 'layout-root-menuitem': props.root, 'active-menuitem': activeIndex === i && !item.disabled });
                const link = getLink(item, i);
                const tooltip = (
                    <div className="layout-menu-tooltip">
                        <div className="layout-menu-tooltip-arrow"></div>
                        <div className="layout-menu-tooltip-text">{item.label}</div>
                    </div>
                );

                return (
                    <li key={item.label || i} className={menuitemClassName} role="menuitem">
                        {link}
                        {tooltip}
                        <CSSTransition classNames="p-toggleable-content" timeout={transitionTimeout} in={activeIndex === i} unmountOnExit>
                            <AppSubmenu items={visible(item) && item.items} menuActive={props.menuActive} menuMode={props.menuMode} parentMenuItemActive={activeIndex === i} onMenuItemClick={props.onMenuItemClick}></AppSubmenu>
                        </CSSTransition>
                    </li>
                );
            }

            return null;
        })
    };

    useEffect(() => {
        if (props.resetActiveIndex && isHorizontalOrSlim()) {
            setActiveIndex(null);
        }
    }, [props.resetActiveIndex, isHorizontalOrSlim]);

    useEffect(() => {
        if (!props.menuActive && isHorizontalOrSlim()) {
            setActiveIndex(null);
        }
    }, [props.menuActive, isHorizontalOrSlim]);

    if (!props.items) {
        return null;
    }

    const items = getItems();
    return (
        <ul className={props.className} role="menu">
            {items}
        </ul>
    );
}

const AppMenu = (props) => {

    const history = useHistory();

    const onSidebarMouseOver = () => {
        if (props.menuMode === "sidebar" && !props.sidebarStatic) {
            props.onSidebarMouseOver()
        }
    };

    const onSidebarMouseLeave = () => {
        if (props.menuMode === "sidebar" && !props.sidebarStatic) {
            setTimeout(() => {
                props.onSidebarMouseLeave()
            }, 250);
        }
    };

    return (
        <div className={classNames('menu-wrapper', { 'layout-sidebar-active': props.sidebarActive })}
            onClick={props.onMenuClick} onMouseOver={onSidebarMouseOver} onMouseLeave={onSidebarMouseLeave}>
            <div className="sidebar-logo">
                <button className="p-link"  onClick={() => history.push('/')}>
                    <img src="assets/layout/images/logo-freya-single.svg" alt="freya-layout" />
                </button>
                <button className="sidebar-pin p-link" onClick={(event) => props.onToggleMenu(event)}>
                    <span className="pin"></span>
                </button>
            </div>

            <div className="layout-menu-container">
                <AppSubmenu items={props.model} className="layout-menu"
                    menuActive={props.menuActive} onRootMenuItemClick={props.onRootMenuItemClick} mobileMenuActive={props.mobileMenuActive}
                    onMenuItemClick={props.onMenuItemClick} root menuMode={props.menuMode} parentMenuItemActive resetActiveIndex={props.resetActiveIndex} />
            </div>
        </div >

    )
}

export default AppMenu;
