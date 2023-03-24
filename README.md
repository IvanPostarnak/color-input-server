# Color Input (Server)

* I was not well aware of standards of server's architecture, so I tried FSD (Future Sliced Design)
    * constants/  (for constants of Server, or of Module's)
    * features/   (for functions of middle levels)
    * helpers/    (support functions for ones of middle levels)
    * shared/     (mostly, creating functions)
    * modules/    (every module has )

----
* Modules/
    * restoreEnvironment/ (creating files if they are not existing - UNdeletable)
    * serverLog/          (log related module)
    * txtDatabase/        (the one that is responsible for txt-data-saving)
    * sqlDatabase/        is comming...