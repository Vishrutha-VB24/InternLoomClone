/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as SigninImport } from './routes/signin'
import { Route as RegisterImport } from './routes/register'
import { Route as PricingImport } from './routes/pricing'
import { Route as LoginImport } from './routes/login'
import { Route as InternshipImport } from './routes/internship'
import { Route as FreelanceImport } from './routes/freelance'
import { Route as ContactImport } from './routes/contact'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SigninRoute = SigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const PricingRoute = PricingImport.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const InternshipRoute = InternshipImport.update({
  id: '/internship',
  path: '/internship',
  getParentRoute: () => rootRoute,
} as any)

const FreelanceRoute = FreelanceImport.update({
  id: '/freelance',
  path: '/freelance',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/freelance': {
      id: '/freelance'
      path: '/freelance'
      fullPath: '/freelance'
      preLoaderRoute: typeof FreelanceImport
      parentRoute: typeof rootRoute
    }
    '/internship': {
      id: '/internship'
      path: '/internship'
      fullPath: '/internship'
      preLoaderRoute: typeof InternshipImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRoute
  '/contact': typeof ContactRoute
  '/freelance': typeof FreelanceRoute
  '/internship': typeof InternshipRoute
  '/login': typeof LoginRoute
  '/pricing': typeof PricingRoute
  '/register': typeof RegisterRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRoute
  '/contact': typeof ContactRoute
  '/freelance': typeof FreelanceRoute
  '/internship': typeof InternshipRoute
  '/login': typeof LoginRoute
  '/pricing': typeof PricingRoute
  '/register': typeof RegisterRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRoute
  '/contact': typeof ContactRoute
  '/freelance': typeof FreelanceRoute
  '/internship': typeof InternshipRoute
  '/login': typeof LoginRoute
  '/pricing': typeof PricingRoute
  '/register': typeof RegisterRoute
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/contact'
    | '/freelance'
    | '/internship'
    | '/login'
    | '/pricing'
    | '/register'
    | '/signin'
    | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/contact'
    | '/freelance'
    | '/internship'
    | '/login'
    | '/pricing'
    | '/register'
    | '/signin'
    | '/signup'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/contact'
    | '/freelance'
    | '/internship'
    | '/login'
    | '/pricing'
    | '/register'
    | '/signin'
    | '/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRoute: typeof AuthenticatedRoute
  ContactRoute: typeof ContactRoute
  FreelanceRoute: typeof FreelanceRoute
  InternshipRoute: typeof InternshipRoute
  LoginRoute: typeof LoginRoute
  PricingRoute: typeof PricingRoute
  RegisterRoute: typeof RegisterRoute
  SigninRoute: typeof SigninRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute,
  ContactRoute: ContactRoute,
  FreelanceRoute: FreelanceRoute,
  InternshipRoute: InternshipRoute,
  LoginRoute: LoginRoute,
  PricingRoute: PricingRoute,
  RegisterRoute: RegisterRoute,
  SigninRoute: SigninRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/contact",
        "/freelance",
        "/internship",
        "/login",
        "/pricing",
        "/register",
        "/signin",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/freelance": {
      "filePath": "freelance.tsx"
    },
    "/internship": {
      "filePath": "internship.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/pricing": {
      "filePath": "pricing.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
