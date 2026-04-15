function layout ({children}) {
    return (
        <Layout>
            <Header>
                <Container>
                    <p>TechStore</p>
                    <p>TV</p>
                    <p>Phone</p>
                    <p>Laptop</p>
                </Container>
            </Header>

            <Body>
                <ContentConteiner>
                    <Sidebar>
                        <Heading />
                        <SidebarConteiner />
                    </Sidebar>
                </ContentConteiner>

                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Body>

            <Footer>
                <div>
                    <p>About</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>
                <div>
                    <p>Support</p>
                    <p>Content</p>
                    <p>FAQ</p>
                    <p>Shipping</p>
                </div>
            </Footer>
        </Layout>
    )
}