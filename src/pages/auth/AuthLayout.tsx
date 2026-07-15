type AuthLayoutProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex lg:w-5/12">
            </div>

            <div className="w-full lg:w-7/12">
                {children}
            </div>
        </div>
    );
}