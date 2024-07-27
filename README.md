# Crypto Dashboard

## Walkthrough of this Application

The Crypto Dashboard is a web application that provides real-time information about various cryptocurrencies. Users can view a list of cryptocurrencies, see detailed information about each one, and monitor price changes in real-time. The application features a search function, enabling users to quickly find specific cryptocurrencies. 

### Features

- **Responsive Navbar**: A navigation bar at the top that includes a search field for filtering cryptocurrencies and a theme switcher for toggling between light and dark modes.
- **Persistant Header and Footer**: The header and footer are persistent across all webpages, rendered over the layout.
- **Server Components**: Server components are used to make API calls efficiently.
- **Carousel**: A carousel showcasing famous cryptocurrencies and displaying their current prices.
- **Cryptocurrency List**: A table listing various cryptocurrencies, providing details such as symbol, name, price, market cap, and a favorites button.
- **Crypto Details Page**: Clickable links on cryptocurrency names lead to a dedicated details page, presenting additional information and price history.
- **Real-Time Updates**: Prices are updated in real-time using WebSocket connections.
- **Theme Support**: Users can switch between light and dark modes with a smooth transition and persistent theme storage.
- **Test-cases**: Test cases written for the project using jest.

## Tech Stack Used

- **Next.js 14**: A React framework for building server-side rendered and statically generated web applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework for styling components.
- **Chart.js**: A JavaScript library for creating charts, used for displaying price history.
- **WebSocket**: For real-time communication and updates on cryptocurrency prices.
- **Local Storage**: To persist user preferences such as theme selection.
- **Jest**: For writing test cases of the project.

## Steps to Run this Application

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/crypto-dashboard.git
   cd crypto-dashboard
   ```

2. **Install Dependencies**

   Make sure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root of your project and copy .env.sample file content over there.

4. **Run the Development Server**

   Start the development server:

   ```bash
   npm run dev
   ```

   Your application should be running at [http://localhost:3000](http://localhost:3000).

5. **Visit the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the Crypto Dashboard.

## Screenshots
1. **Home Page**
 
    ![alt HomePage](https://res.cloudinary.com/sriprakhar2/image/upload/v1722055931/crypto-dashboard/Screenshot_2024-07-27_at_10.19.11_AM_er22zp.png)

2. **Crypto-details Page**

    ![alt CryptoDetailsPage](https://res.cloudinary.com/sriprakhar2/image/upload/v1722055931/crypto-dashboard/Screenshot_2024-07-27_at_10.19.55_AM_krzaqy.png)

3. **Search Page**

    ![alt SearchPage](https://res.cloudinary.com/sriprakhar2/image/upload/v1722055932/crypto-dashboard/Screenshot_2024-07-27_at_10.20.15_AM_aj0gmx.png)
4. **Dark Theme**

    ![alt DarkHomePage](https://res.cloudinary.com/sriprakhar2/image/upload/v1722055931/crypto-dashboard/Screenshot_2024-07-27_at_10.20.40_AM_bxwwgj.png)
    
    ![alt FooterShow](https://res.cloudinary.com/sriprakhar2/image/upload/v1722055931/crypto-dashboard/Screenshot_2024-07-27_at_10.20.56_AM_rtxvse.png)

## PoweredBy

This project is powered by CoinCap api.
CoinCap is a useful tool for real-time pricing and market activity for over 1,000 cryptocurrencies. By collecting exchange data from thousands of markets, CoinCap is able to offer transparent and accurate data on asset price and availability.


## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to modify any sections to better fit your project and its specifics!