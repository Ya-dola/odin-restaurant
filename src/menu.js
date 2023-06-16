import FriedChickenIcon from './menuItems/FriedChicken.png';
import ShawarmaIcon from './menuItems/Shawarma.png';
import BurgerIcon from './menuItems/Burger.png';
import PizzaIcon from './menuItems/Pizza.png';
import ClubSandwichIcon from './menuItems/ClubSandwich.png';
import PhillyIcon from './menuItems/Philly.png';
import SubmarineIcon from './menuItems/Submarine.png';
import TacoIcon from './menuItems/Taco.png';
import FriesIcon from './menuItems/Fries.png';
import NachosIcon from './menuItems/Nachos.png';
import OnionRingsIcon from './menuItems/OnionRings.png';
import CakeIcon from './menuItems/Cake.png';
import DonutChocIcon from './menuItems/DonutChoc.png';
import DonutStrawIcon from './menuItems/DonutStraw.png';
import DonutWhiteChocIcon from './menuItems/DonutWhiteChoc.png';
import IceCrmBarIcon from './menuItems/IceCrmBar.png';
import IceCrmSftSvrVanIcon from './menuItems/IceCrmSftSvrVan.png';
import IceCrmSftSvrChocIcon from './menuItems/IceCrmSftSvrChoc.png';
import IceCrmConeBBerryVanIcon from './menuItems/IceCrmConeBBerryVan.png';
import IceCrmConeOrgMintIcon from './menuItems/IceCrmConeOrgMint.png';
import IceCrmConeOrgPineIcon from './menuItems/IceCrmConeOrgPine.png';
import MilkShakeChocIcon from './menuItems/MilkShakeChoc.png';
import MilkShakeStrawIcon from './menuItems/MilkShakeStraw.png';
import SoftDrinkCanIcon from './menuItems/SoftDrinkCan.png';
import CoffeeIcon from './menuItems/Coffee.png';
import TakeawayBagIcon from './menuItems/TakeawayBag.png';

function displayMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    // TODO - ADD Sections to Menu Items

    menu.appendChild(displayMenuItem(TakeawayBagIcon, 'Takeaway Bag - We BROKE!', 1));
    
    // Food Items
    menu.appendChild(displayMenuItem(FriedChickenIcon, 'Bangin\' Broast Chicken', 15));
    menu.appendChild(displayMenuItem(ShawarmaIcon, 'Chicken Shawarma', 8));
    menu.appendChild(displayMenuItem(BurgerIcon, 'Chicken Burger', 10));
    menu.appendChild(displayMenuItem(PizzaIcon, 'Chicken Pizza', 20));
    menu.appendChild(displayMenuItem(ClubSandwichIcon, 'Chicken Club Sandwich', 10));
    menu.appendChild(displayMenuItem(PhillyIcon, 'Chicken Philly', 16));
    menu.appendChild(displayMenuItem(SubmarineIcon, 'Chicken Submarine', 14));
    menu.appendChild(displayMenuItem(TacoIcon, 'Beef Taco', 7));
    menu.appendChild(displayMenuItem(FriesIcon, 'French Fries', 4));
    menu.appendChild(displayMenuItem(NachosIcon, 'Nachos', 6));
    menu.appendChild(displayMenuItem(OnionRingsIcon, 'Onion Rings', 4));

    // Dessert Items
    menu.appendChild(displayMenuItem(CakeIcon, 'Strawberry Cheese Cake', 8));
    menu.appendChild(displayMenuItem(DonutChocIcon, 'Thicc Chocolate Donut', 5));
    menu.appendChild(displayMenuItem(DonutStrawIcon, 'Strawberry Donut', 5));
    menu.appendChild(displayMenuItem(DonutWhiteChocIcon, 'Bustin\' White Chocolate Donut', 7));
    menu.appendChild(displayMenuItem(IceCrmBarIcon, 'Mint Chocolate Ice Bar', 4));
    menu.appendChild(displayMenuItem(IceCrmSftSvrVanIcon, 'BIG Vanilla Soft Serve', 1));
    menu.appendChild(displayMenuItem(IceCrmSftSvrChocIcon, 'BIG Chocolate Soft Serve', 2));
    menu.appendChild(displayMenuItem(IceCrmConeBBerryVanIcon, 'BlueBerry & Vanilla Cone', 5));
    menu.appendChild(displayMenuItem(IceCrmConeOrgMintIcon, 'Orange & Mint Cone', 5));
    menu.appendChild(displayMenuItem(IceCrmConeOrgPineIcon, 'Orange & Pineapple Cone', 5));

    // Drink Items
    menu.appendChild(displayMenuItem(MilkShakeChocIcon, 'Chocolate Milkshake', 4));
    menu.appendChild(displayMenuItem(MilkShakeStrawIcon, 'Strawberry Milkshake', 4));
    menu.appendChild(displayMenuItem(SoftDrinkCanIcon, 'Soft Drink Can', 2));
    menu.appendChild(displayMenuItem(CoffeeIcon, 'Wildin\' Coffee', 3));

    content.appendChild(menu);
}

function displayMenuItem(icon, name, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('card');

    const imgIcon = document.createElement('img');
    imgIcon.classList.add('icon');
    imgIcon.src = icon;
    imgIcon.alt = name;

    const info = document.createElement('div');
    info.classList.add('info');

    const h2Name = document.createElement('h2');
    h2Name.classList.add('name');
    h2Name.textContent = name;

    // const pDesc = document.createElement('p');
    // pDesc.classList.add('desc');
    // pDesc.textContent = desc;

    const h1Price = document.createElement('h1');
    h1Price.classList.add('price');
    h1Price.textContent = `$ ${price}`;

    info.appendChild(h2Name);
    // info.appendChild(pDesc);
    info.appendChild(h1Price);

    menuItem.appendChild(imgIcon);
    menuItem.appendChild(info);

    return menuItem;
}

export default displayMenu;
