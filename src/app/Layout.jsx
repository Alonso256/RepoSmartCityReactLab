import { AppSidebar } from "@/components/ui/app-sidebar"

function Layout({ children }) {
  return (
    
      <AppSidebar>
        {children}
      </AppSidebar>
   
  )
}
export { Layout }