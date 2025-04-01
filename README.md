This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<!-- adding tech stack used heading and their links name  -->

## Tech used we will be using - 

- [Next.js 15](https://nextjs.org)
- [react.js 19](https://react.dev/)
- [Clerk](https://clerk.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev)
- [materialui](https://mui.com/material-ui/)
- [magicui](https://magicui.design/)
- [aceternityui](https://ui.aceternity.com/)
- [GSAP](https://gsap.com)
- [shadcn/ui](https://ui.shadcn.com/)
- [three.js](https://threejs.org/)
- [framer motion](https://motion.dev/) 😎

## Basic rules to write code

- jo bhi tum kro as summary zDesignStructure me daalte jana sahi format me jaise maine daala hai, date ke sath
- try krarna components jyada bnao, taaki maximum chije stryctured + reuseable ho 
- components ke naam thode ase rakhna - like eg gallery page ke liye xyz component bana rha hu toh Gallery_xyz.tsx 
- zPageUpdate file isiliye bnae hai , like tumne kahi pr koi new font, koi new package , ya worst case me kisi existing package ka version change kiya ho 
    toh asie chije apne page ke aage isme likh dena niche 
- Public me sara photo,video,icons,etc rakhna 
- lib --> since apan ko like kuch events,kuch phtos,etc dikhane hai toh vo sab ko exclusively database me rakhne ki need nhi hi kyokii vo kuch hi hai limited in number 
            so unko lib folder ke andar rakhna hai 
- types --> we are using type script , so har file me type type used krne honge , to vo types sare is file me define honge 
                    try krna ek page ke types ek sath ho 
## Rules to contribute

1. Go to the code section (home page of repo).
2. Click on "Branches", written just below the name "Exodia-IIT-Mandi".
3. Create your personalized branch by clicking on the new Branch green button on the upper right side, write its name and enter.
4. After creating the new branch, you can see it on the screen, click on it.
5. You can verify that you opened your own branch by seeing your branch name just below "Exodia-IIT-Mandi", after you open your branch after step 4.

Then follow the following steps:

1. Go to the repo, download its zip folder by clicking on the green "code" button on the upper right side.
2. Extract the zip folder, and open it using VS Code.
3. Open a new terminal in VS Code and write the following commands one by one:
    > **NOTE:** Here "temp" is my branch name, make sure you replace it with your branch name.
    > **NOTE:** Also make sure not to make any changes, first you have to link your VS Code local branch with your GitHub branch.
    ```bash
    git init
    git remote add origin https://github.com/Cultural-Council-IIT-Mandi/Exodia-IIT-Mandi.git
    git fetch origin temp
    git checkout -b temp origin/temp
    git add .
    git commit -m "Your commit message"
    git push origin temp
    ```
4. At the end, you should see "Everything up-to-date" in the terminal.
5. Then for just checking, make a little change to the `zPageUpdate` file.
6. Then you have to push these changes by doing the following:
    - On the left side in VS Code, you have Source Control.
    - Click on it.
    - Inside the message box, write a message for your commit.
    - Then press commit.
    - If something appears, press the OK button.
7. Then check on your browser whether that change appears or not. If it appears, Balle Balle! Go and start developing. If not, contact Piyush 🫠 .
8. Whenever you change code and push to your branch, you will see on the home page of your branch on the TOP - "CREATE PULL REQUEST".
    - Click on it.
    - Write the name and description and press create PR.
    - Let us know to merge it. We will review the code and merge your PR.
