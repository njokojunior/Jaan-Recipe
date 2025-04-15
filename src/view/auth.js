const markup = `
<section id="authentication" class="section-auth">
            <!-- Navigation to the source img -->
            <!-- Rename image -->
            <img src="./assets/login-img.jpg" alt="restaurant image with tables" class="section-auth-img" />
        
        
            <div class="section-auth-content">
                <h1>Welcom to Jaan </h1>
                <p>Please sign in to continue</p>
        
                <div class="section-auth-controls">
                    <div class="section-auth-controls-buttons">
                        <button type="button">Sign In</button>
                        <button type="button">Sign Up</button>
                    </div>
                    <hr>
        
                    <form class="section-auth-form">
                        <div class="group-input">
                            <label for="email">Email Address</label>
                            <input type="email" placeholder="Enter your email" id="email" />
                        </div>
        
                        <div class="group-input">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter your password" id="password">
                        </div>
        
                        <div class="section-auth-form-captcha">
                            <div>
                                <input type="checkbox" id="remember-me">
                                <label for="remember-me">Remember me</label>
                            </div>
        
                            <span>Forgot Password</span>
                        </div>
        
                        <button class="btn" id="auth-button">Login</button>
                    </form>
                </div>
            </div>
        </section>
`;

export default markup;